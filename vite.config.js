import { defineConfig } from "vite";

export default defineConfig(({ command }) => ({
  base: command === "build" ? "/portfolio_2/" : "/",
  build: {
    outDir: "docs",
  },
}));
