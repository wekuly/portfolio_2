export const cardContents = [
  {
    title: "소개",
    subtitle: "About",
    body: "다양한 플랫폼의 상용 서비스를 개발하며 성능과 안정성을 개선해왔습니다. 사용자 경험과 실시간 인터랙션을 고민하며 새로운 기술을 서비스로 구현하는 개발자입니다.",
    html: `
      <img src="/detail/1.png" alt="프로필 사진" />
      <h3>인적사항</h3>
      <dl>
        <div class="resume-row">
          <dt>이름</dt>
          <dd>김태환</dd>
        </div>
        <div class="resume-row">
          <dt>연락처</dt>
          <dd>010-9767-5806</dd>
        </div>
      </dl>
      <p class="resume-bio">새로운 것을 접하고, 그것을 직접 만들어가는 과정을 좋아합니다.<br />
      작은 아이디어라도 직접 구현해보며 배우는 것을 즐기고,<br />
      예상대로 동작하지 않을 때 원인을 찾아 해결하는 과정에서 가장 큰 재미를 느낍니다.<br /><br />
      끊임없이 배우고 시도하며,<br />
      사람들이 직접 즐기고 사용할 수 있는 무언가를 만들어내는 개발자가 되고 싶습니다.</p>
    `,
  },
  {
    title: "기술 스택",
    subtitle: "Skills",
    body: 
    "웹 서비스를 만들고 운영하는 데 쓰는 프론트·백엔드 기술입니다.\nReact, TypeScript, Next.js, Vue.js로 화면을 구성하고 Node.js와 RESTful API로 서버를 붙입니다.\n이어서 C#, Unity, Three.js로 웹에서 3D 화면을 보여 주는 작업까지 이어갑니다.",
    html: `
      <h3>기술 스택</h3>
      <ul class="skill-list">
        <li>React</li>
        <li>TypeScript</li>
        <li>JavaScript</li>
        <li>CSS</li>
        <li>HTML</li>
        <li>Next.js</li>
        <li>Git</li>
        <li>SQL</li>
        <li>Node.js</li>
        <li>RESTful API</li>
        <li>Vue.js</li>
        <li>Unity</li>
        <li>C#</li>
        <li>Three.js</li>
      </ul>
    `,
  },
  {
    title: "경력",
    subtitle: "Experience",
    body: "부싯돌에서 TV 플랫폼 콘텐츠를 만들고 운영했습니다.\nLG 스탠바이미를 비롯한 주요 셋톱·TV에 게임을 올렸고, 매칭·결제·운영까지 이어서 맡았습니다.\n지금은 동호로보틱스에서 스마트팩토리 관제와 3D 디지털트윈 시스템을 개발하고 있습니다.",
    html: `
      <h3>경력</h3>
      <section class="job">
        <div class="job-head">
          <strong>부싯돌</strong>
          <span>2022.02 ~ 2025.03</span>
        </div>
        <p class="job-role">LG 스탠바이미 기본 탑재 콘텐츠 개발</p>
        <ul class="job-list">
          <li>체스, 바둑, Animal Hit 등 다수 타이틀의 메인 개발 담당</li>
          <li>핵심 로직 설계, PVP 매칭 시스템, 광고 및 결제 연동 구현</li>
          <li>LG, 삼성, SKB 등 주요 TV 플랫폼에 상용 서비스 납품</li>
        </ul>
        <p class="job-role">부싯돌 게임 프로젝트 개발 및 운영</p>
        <ul class="job-list">
          <li>골드타워 디펜스 메인 개발자로 참여하여 기능 설계 및 구현</li>
          <li>포커, 맞고, 바둑 등 기존 서비스 오류 수정 및 콘텐츠 업데이트</li>
        </ul>
        <p class="job-role">데이터 및 서비스 운영 업무</p>
        <ul class="job-list">
          <li>MariaDB 기반 사용자 데이터 설계·관리 및 기능 개발</li>
          <li>사용자 이슈 분석, 오류 재현 및 수정</li>
          <li>내부 QA 협업을 통한 품질 개선</li>
        </ul>
        <p class="job-note">제약 환경의 TV 플랫폼에서도 안정적으로 동작하는 서비스를 목표로 개발과 운영을 수행</p>
      </section>
      <section class="job">
        <div class="job-head">
          <strong>주식회사 동호로보틱스</strong>
          <span>2026.03 ~ 재직중</span>
        </div>
        <p class="job-role">산업용 자동화시스템 소프트웨어 개발</p>
        <ul class="job-list">
          <li>스마트팩토리를 총괄하는 대시보드 및 현장 설비, PLC 연동</li>
          <li>3D 디지털트윈을 활용한 컨트롤러 역할까지 겸하는 스마트관제시스템 개발</li>
        </ul>
      </section>
    `,
  },
  {
    title: "프로젝트",
    subtitle: "Projects",
    body: "TV·모바일 상용 게임과 웹 기반 실시간 서비스를 시작으로, 현재는 스마트팩토리 관제 시스템까지 다양한 서비스를 개발해왔습니다.골드타워 디펜스와 LG 스탠바이미 타이틀의 메인 개발자로 참여하며 글로벌 서비스와 매출 창출을 경험했고, 최근에는 Three.js 기반 로봇 관제와 용접 모니터링 시스템을 개발하며 3D 시각화와 산업 데이터 영역으로 기술을 확장하고 있습니다.AI 역시 체스·바둑의 대국 엔진 연동, 로봇 관제의 LLM 기반 자연어 제어, 용접 품질 예측 등 실제 서비스에 적용하며 새로운 기술을 직접 구현해왔습니다.",
    html: `
      <h3>주요 프로젝트</h3>
      <section class="project">
        <div class="project-media">
          <img src="/detail/projects/goldtower.jpg" alt="골드 타워 디펜스" />
        </div>
        <div class="project-head">
          <strong>골드 타워 디펜스</strong>
          <span>2022.03 ~ 2025.01</span>
        </div>
        <p>게임의 클라이언트·서버 전반을 메인 개발자로 담당하며 게임 시스템, 결제, 길드, 랭킹, 이벤트 등을 개발하고 운영했습니다. LG·삼성·KT·SKB·모바일 등 다양한 플랫폼에 서비스를 납품하고 운영했습니다.</p>
        <p class="project-result">주요 성과: 연간 매출 약 2억 원 달성 / 다양한 플랫폼 및 글로벌 서비스 운영</p>
      </section>
      <section class="project">
        <div class="project-media">
          <img src="/detail/projects/chess.jpg" alt="체스" />
        </div>
        <div class="project-head">
          <strong>체스</strong>
          <span>2022.06 ~ 2022.09</span>
        </div>
        <p>LG 스탠바이미용 체스 게임을 메인 개발자로 개발했습니다. 체스 게임 로직과 실시간 PVP를 구현하고 AI 및 광고 API를 연동하여 게임 내 수익화 시스템을 구축했습니다.</p>
        <p class="project-result">주요 성과: LG 스탠바이미 글로벌 서비스 / 광고 누적 수익 약 1억 원</p>
      </section>
      <section class="project">
        <div class="project-media">
          <img src="/detail/projects/animalhit.jpg" alt="Animal Hit" />
        </div>
        <div class="project-head">
          <strong>Animal Hit</strong>
          <span>2022.09 ~ 2022.11</span>
        </div>
        <p>LG 스탠바이미 기본 게임으로 제공되는 캐주얼 게임을 개발했습니다. JavaScript 기반 게임 로직과 UI를 구현하고 스탠바이미 플랫폼 환경에 맞춰 최적화 및 납품을 진행했습니다.</p>
      </section>
      <section class="project">
        <div class="project-media">
          <img src="/detail/projects/baduk.jpg" alt="바둑" />
        </div>
        <div class="project-head">
          <strong>바둑</strong>
          <span>2025.06 ~ 2025.08</span>
        </div>
        <p>LG 스탠바이미용 바둑 게임을 개발했습니다. KATAGO AI 연동을 통한 AI 대국과 실시간 PVP 기능을 구현하고, 오프라인 환경에서도 안정적으로 동작할 수 있도록 시스템을 구성했습니다.</p>
        <p class="project-result">주요 성과: LG 스탠바이미 납품 / 실시간 PVP 및 AI 대국 구현</p>
      </section>
      <section class="project">
        <div class="project-media">
          <img src="/detail/projects/remember_game_image.jpg" alt="기억의 만찬" />
        </div>
        <div class="project-head">
          <strong>기억의 만찬</strong>
          <span>개인 프로젝트</span>
        </div>
        <p>사용자 간 상호작용과 실시간 상태 동기화를 중심으로 구현한 웹 프로젝트입니다. TypeScript, Vite, Socket.IO, Express를 활용해 클라이언트와 실시간 서버를 직접 설계하고 개발했으며, 클라우드 환경에서 배포 및 운영까지 경험했습니다.</p>
      </section>
      <section class="project">
        <div class="project-media">
          <img src="/detail/projects/robot_obs.png" alt="로봇관제 시스템" />
        </div>
        <div class="project-head">
          <strong>로봇관제 시스템</strong>
          <span>2026.05 ~ 2026.06</span>
        </div>
        <p>서로 다른 제조사의 로봇을 하나의 시스템에서 통합 관리·제어하기 위한 웹 기반 관제 시스템을 개발했습니다. Three.js를 활용한 3D 환경과 실시간 상태 시각화를 구현하여 작업자가 직관적으로 로봇을 관제할 수 있도록 했으며, LLM을 연동하여 자연어 기반의 AI 지원 기능을 구현했습니다.</p>
      </section>
      <section class="project">
        <div class="project-media">
          <img src="/detail/projects/welding_project_01.png" alt="용접모니터링 시스템" />
        </div>
        <div class="project-head">
          <strong>용접모니터링 시스템</strong>
          <span>2026.07 ~ 2026.08</span>
        </div>
        <p>용접 과정에서 발생하는 작업자 자세, 작업 조건 및 용접 데이터를 통합하여 실시간으로 시각화하는 웹 기반 모니터링 시스템을 개발했습니다. 다양한 데이터를 하나의 대시보드에서 확인할 수 있도록 구성하고, 영상·센서 등 관측 데이터를 분석하여 AI 기반 용접 품질 예측으로 확장할 수 있는 구조를 설계했습니다.</p>
      </section>
    `,
  },
  {
    title: "학력",
    subtitle: "Education",
    body: "대구대학교에서 멀티미디어를 전공하고 심리를 복수전공했습니다.\n화면과 인터랙션을 만드는 일과, 쓰는 사람을 이해하는 일을 같이 배운 배경입니다.",
    html: `
      <h3>학력</h3>
      <section class="job">
        <div class="job-head">
          <strong>대구대학교</strong>
          <span>2013.02 ~ 2020.02</span>
        </div>
        <p class="job-role">멀티미디어학 학사 / 심리 복수전공</p>
        <ul class="job-list">
          <li>경북 · 졸업</li>
        </ul>
      </section>
      <section class="job">
        <div class="job-head">
          <strong>능인고등학교</strong>
          <span>2010.02 ~ 2013.02</span>
        </div>
        <p class="job-role">졸업</p>
      </section>
    `,
  },
  {
    title: "자격증 및 마무리",
    subtitle: "Certificates",
    body: "정보처리기능사와 기상기사를 보유하고 있습니다.\n여기까지 봐 주셔서 감사합니다. 같이 일할 수 있다면 반갑게 이어가겠습니다.",
    html: `
      <h3>자격증</h3>
      <section class="job">
        <div class="job-head">
          <strong>기상기사</strong>
          <span>2020.06</span>
        </div>
        <p class="job-role">한국산업인력공단 · 최종합격</p>
      </section>
      <section class="job">
        <div class="job-head">
          <strong>정보처리기능사</strong>
          <span>2017.06</span>
        </div>
        <p class="job-role">한국산업인력공단 · 최종합격</p>
      </section>
      <h3>마무리</h3>
      <p class="resume-bio">봐 주셔서 감사합니다.<br />
      새로운 것을 만들고, 쓰는 사람이 바로 이해하게 만드는 일을 이어가고 싶습니다.</p>
    `,
  },
];
