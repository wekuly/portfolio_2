import * as THREE from "three";
import { CSS3DObject, CSS3DRenderer } from "three/examples/jsm/renderers/CSS3DRenderer.js";
import { cardContents } from "./content.js";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0b0b0d);
scene.fog = new THREE.Fog(0x0b0b0d, 6, 16);

const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.set(0, 1.1, 8);
camera.lookAt(0, 0.15, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.15;
renderer.domElement.style.position = "absolute";
renderer.domElement.style.inset = "0";
document.body.appendChild(renderer.domElement);

const cssRenderer = new CSS3DRenderer();
cssRenderer.setSize(window.innerWidth, window.innerHeight);
cssRenderer.domElement.style.position = "absolute";
cssRenderer.domElement.style.inset = "0";
cssRenderer.domElement.style.pointerEvents = "none";
document.body.appendChild(cssRenderer.domElement);

scene.add(new THREE.AmbientLight(0xffffff, 0.45));

const keyLight = new THREE.DirectionalLight(0xffffff, 1.4);
keyLight.position.set(2, 4, 6);
scene.add(keyLight);

const rimLight = new THREE.DirectionalLight(0xc8d0ff, 0.55);
rimLight.position.set(-3, 2, -5);
scene.add(rimLight);

const carousel = new THREE.Group();
scene.add(carousel);

const face = new THREE.Group();
carousel.add(face);

const tilt = new THREE.Group();
tilt.rotation.x = 0.42;
tilt.scale.setScalar(0.72);
face.add(tilt);

const spinner = new THREE.Group();
tilt.add(spinner);

const radius = 3.2;
const ringPoints = new THREE.EllipseCurve(
  0,
  0,
  radius,
  radius,
  0,
  Math.PI * 2,
  false,
  0
)
  .getPoints(256)
  .map((point) => new THREE.Vector3(point.x, 0, point.y));

const ringPath = new THREE.CatmullRomCurve3(ringPoints, true);
const ringGeometry = new THREE.TubeGeometry(ringPath, 256, 0.022, 12, true);
const ringMaterial = new THREE.MeshStandardMaterial({
  color: 0xf4f1ea,
  metalness: 0.72,
  roughness: 0.22,
});
const ring = new THREE.Mesh(ringGeometry, ringMaterial);
spinner.add(ring);

const itemCount = 6;
const itemWidth = 0.78;
const itemHeight = 1.96;
const itemDepth = 0.05;
const itemAspect = itemWidth / itemHeight;
const itemGeometry = new THREE.BoxGeometry(itemWidth, itemHeight, itemDepth);
const sideMaterial = new THREE.MeshStandardMaterial({
  color: 0x2a2a2e,
  metalness: 0.3,
  roughness: 0.5,
});
const textureLoader = new THREE.TextureLoader();
const imageExtensions = ["png", "jpg", "jpeg", "webp"];
const cards = [];

function fitTexture(texture) {
  const image = texture.image;
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = Math.round(512 / itemAspect);

  const context = canvas.getContext("2d");
  context.fillStyle = "#f4f1ea";
  context.fillRect(0, 0, canvas.width, canvas.height);

  const scale = Math.min(canvas.width / image.width, canvas.height / image.height);
  const drawWidth = image.width * scale;
  const drawHeight = image.height * scale;
  context.drawImage(
    image,
    (canvas.width - drawWidth) / 2,
    (canvas.height - drawHeight) / 2,
    drawWidth,
    drawHeight
  );

  const fitted = new THREE.CanvasTexture(canvas);
  fitted.colorSpace = THREE.SRGBColorSpace;
  fitted.anisotropy = renderer.capabilities.getMaxAnisotropy();
  fitted.needsUpdate = true;
  return fitted;
}

function applyTexture(material, texture) {
  material.map = fitTexture(texture);
  material.color.set(0xffffff);
  material.needsUpdate = true;
}

async function loadCardTexture(index) {
  for (const extension of imageExtensions) {
    const url = `/cards/card${index}.${extension}`;

    try {
      const response = await fetch(url);
      if (!response.ok) continue;

      const blob = await response.blob();
      const objectUrl = URL.createObjectURL(blob);

      const texture = await new Promise((resolve, reject) => {
        textureLoader.load(objectUrl, resolve, undefined, reject);
      });

      URL.revokeObjectURL(objectUrl);
      return texture;
    } catch {
      continue;
    }
  }

  return null;
}

function createFaceMaterial() {
  return new THREE.MeshStandardMaterial({
    color: 0xf4f1ea,
    metalness: 0.12,
    roughness: 0.4,
  });
}

for (let i = 0; i < itemCount; i += 1) {
  const angle = (i / itemCount) * Math.PI * 2;
  const frontMaterial = createFaceMaterial();
  const backMaterial = createFaceMaterial();
  const item = new THREE.Mesh(itemGeometry, [
    sideMaterial,
    sideMaterial,
    sideMaterial,
    sideMaterial,
    frontMaterial,
    backMaterial,
  ]);

  item.position.set(
    Math.sin(angle) * radius,
    itemHeight / 2 + 0.022,
    Math.cos(angle) * radius
  );
  item.lookAt(0, item.position.y, 0);
  item.rotateY(Math.PI);
  item.userData.index = i;
  spinner.add(item);
  cards.push(item);

  loadCardTexture(i + 1).then((texture) => {
    if (!texture) return;
    applyTexture(frontMaterial, texture);
    applyTexture(backMaterial, texture);
  });
}

const detailCardEl = document.getElementById("detail-card");
const copyEl = document.getElementById("detail-copy");
const copyIndex = copyEl.querySelector(".detail-copy__index");
const copyTitle = copyEl.querySelector("h2");
const copySubtitle = copyEl.querySelector(".detail-copy__subtitle");
const copyBody = copyEl.querySelector(".detail-copy__body");
const prevBtn = document.getElementById("nav-prev");
const nextBtn = document.getElementById("nav-next");
const closeBtn = document.getElementById("nav-close");
const hudEl = document.getElementById("hud");

const detailCard = new CSS3DObject(detailCardEl);
detailCard.scale.setScalar(0.0064);
detailCard.position.set(2.8, 0.18, 3.05);
detailCard.quaternion.copy(camera.quaternion);
detailCard.visible = false;
scene.add(detailCard);

const view = {
  open: false,
  carouselX: 0,
  carouselScale: 0.72,
  detailX: 2.8,
  detailScale: 0.0064,
};
const carouselRestX = 0;
const carouselOpenX = -3;
const carouselRestScale = 0.72;
const carouselOpenScale = 0.5;
const detailRestX = 2.8;
const detailOpenX = 0.52;
const detailRestScale = 0.0056;
const detailOpenScale = 0.0064;
let selectedCard = null;

function fillDetail(card) {
  selectedCard = card;
  const content = cardContents[card.userData.index];

  detailCardEl.innerHTML = content.html ?? "";
  detailCardEl.querySelectorAll("img").forEach((img) => {
    img.addEventListener("error", () => {
      img.style.display = "none";
    });
  });
  copyIndex.textContent = String(card.userData.index + 1).padStart(2, "0");
  copyTitle.textContent = content.title;
  copySubtitle.textContent = content.subtitle;
  copyBody.textContent = content.body;
}

function showDetail(card) {
  view.open = true;
  view.carouselX = carouselOpenX;
  view.carouselScale = carouselOpenScale;
  view.detailX = detailOpenX;
  view.detailScale = detailOpenScale;
  detailCard.visible = true;
  detailCardEl.classList.add("is-open");
  copyEl.classList.add("is-open");
  prevBtn.classList.add("is-open");
  nextBtn.classList.add("is-open");
  closeBtn.classList.add("is-open");
  hudEl.classList.add("is-detail");
  fillDetail(card);
}

function hideDetail() {
  selectedCard = null;
  view.open = false;
  view.carouselX = carouselRestX;
  view.carouselScale = carouselRestScale;
  view.detailX = detailRestX;
  view.detailScale = detailRestScale;
  detailCardEl.classList.remove("is-open");
  copyEl.classList.remove("is-open");
  prevBtn.classList.remove("is-open");
  nextBtn.classList.remove("is-open");
  closeBtn.classList.remove("is-open");
  hudEl.classList.remove("is-detail");
}

function stepDetail(direction) {
  if (!selectedCard) return;
  const index =
    (selectedCard.userData.index + direction + itemCount) % itemCount;
  fillDetail(cards[index]);
}

function updateOverlayPosition() {
  if (!detailCard.visible) return;

  const cardRect = detailCardEl.getBoundingClientRect();
  const cardMidY = cardRect.top + cardRect.height / 2;
  copyEl.style.transform = `translate(${cardRect.right + 28}px, ${cardRect.top}px)`;
  prevBtn.style.transform = `translate(${cardRect.left}px, ${cardMidY}px) translate(-65%, -50%)`;

  const copyRect = copyEl.getBoundingClientRect();
  nextBtn.style.transform = `translate(${copyRect.right}px, ${
    copyRect.top + copyRect.height / 2
  }px) translate(-35%, -50%)`;
}

function isCarouselEvent(event) {
  if (detailCardEl.contains(event.target)) return false;
  if (copyEl.contains(event.target)) return false;
  if (event.target.closest(".nav-btn")) return false;
  if (!view.open || !detailCard.visible) return true;
  return event.clientX < detailCardEl.getBoundingClientRect().left - 12;
}

const pointer = {
  dragging: false,
  blocked: false,
  previousX: 0,
  startX: 0,
  startY: 0,
  moved: false,
};
const raycaster = new THREE.Raycaster();
const pointerNdc = new THREE.Vector2();
let velocity = 0;
const secondsPerItem = 5;
const autoSpeed = (Math.PI * 2) / itemCount / secondsPerItem;
const clock = new THREE.Clock();
const clickThreshold = 6;

renderer.domElement.addEventListener("pointerdown", (event) => {
  pointer.moved = false;
  pointer.startX = event.clientX;
  pointer.startY = event.clientY;
  pointer.previousX = event.clientX;

  if (!isCarouselEvent(event)) {
    pointer.dragging = false;
    pointer.blocked = true;
    return;
  }

  pointer.blocked = false;
  pointer.dragging = true;
  velocity = 0;
  renderer.domElement.setPointerCapture(event.pointerId);
  document.body.style.cursor = "grabbing";
  renderer.domElement.style.cursor = "grabbing";
});

renderer.domElement.addEventListener("pointermove", (event) => {
  if (!pointer.dragging) {
    const overCarousel = isCarouselEvent(event);
    const cursor = overCarousel ? "grab" : "default";
    document.body.style.cursor = cursor;
    renderer.domElement.style.cursor = cursor;
    return;
  }

  const totalX = event.clientX - pointer.startX;
  const totalY = event.clientY - pointer.startY;
  if (Math.hypot(totalX, totalY) > clickThreshold) {
    pointer.moved = true;
  }

  const deltaX = event.clientX - pointer.previousX;
  pointer.previousX = event.clientX;

  const spin = deltaX * 0.005;
  spinner.rotation.y += spin;
  velocity = spin;
});

function handleClick(event) {
  if (!isCarouselEvent(event)) return;

  pointerNdc.x = (event.clientX / window.innerWidth) * 2 - 1;
  pointerNdc.y = -(event.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(pointerNdc, camera);

  const hits = raycaster.intersectObjects(cards);
  if (hits.length > 0) {
    showDetail(hits[0].object);
    return;
  }

  if (view.open) {
    hideDetail();
  }
}

function endDrag(event) {
  if (pointer.blocked) {
    pointer.blocked = false;
    return;
  }

  if (!pointer.dragging) return;
  pointer.dragging = false;
  document.body.style.cursor = "grab";
  renderer.domElement.style.cursor = "grab";

  if (!pointer.moved) {
    handleClick(event);
  }
}

window.addEventListener("pointerup", endDrag);
window.addEventListener("pointercancel", endDrag);
detailCardEl.addEventListener("pointerdown", (event) => {
  event.stopPropagation();
});
copyEl.addEventListener("pointerdown", (event) => {
  event.stopPropagation();
});
prevBtn.addEventListener("pointerdown", (event) => {
  event.stopPropagation();
});
nextBtn.addEventListener("pointerdown", (event) => {
  event.stopPropagation();
});
prevBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  stepDetail(-1);
});
nextBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  stepDetail(1);
});
closeBtn.addEventListener("pointerdown", (event) => {
  event.stopPropagation();
});
closeBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  hideDetail();
});
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && view.open) {
    hideDetail();
  }
});

function animate() {
  const delta = clock.getDelta();

  if (!pointer.dragging) {
    spinner.rotation.y += autoSpeed * delta + velocity;
    velocity *= 0.94;
  }

  carousel.position.x = THREE.MathUtils.damp(
    carousel.position.x,
    view.carouselX,
    6.5,
    delta
  );
  const carouselScale = THREE.MathUtils.damp(
    tilt.scale.x,
    view.carouselScale,
    6.5,
    delta
  );
  tilt.scale.setScalar(carouselScale);
  face.rotation.y = Math.atan2(
    camera.position.x - carousel.position.x,
    camera.position.z - carousel.position.z
  );

  detailCard.position.x = THREE.MathUtils.damp(
    detailCard.position.x,
    view.detailX,
    7,
    delta
  );
  const nextScale = THREE.MathUtils.damp(
    detailCard.scale.x,
    view.detailScale,
    7,
    delta
  );
  detailCard.scale.setScalar(nextScale);
  detailCard.quaternion.copy(camera.quaternion);
  updateOverlayPosition();

  if (!view.open && Math.abs(detailCard.position.x - detailRestX) < 0.08) {
    detailCard.visible = false;
  }

  renderer.render(scene, camera);
  cssRenderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  cssRenderer.setSize(window.innerWidth, window.innerHeight);
});
