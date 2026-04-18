import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// `base: './'` makes the build work whether deployed at the root
// (https://richardlichade.github.io) or under a project path
// (https://richardlichade.github.io/academic-site/).
export default defineConfig({
  plugins: [react()],
  base: "./",
});
