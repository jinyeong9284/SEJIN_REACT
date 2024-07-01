import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true, // 서버 시작시 브라우저에서 자동으로 열림
  },
  plugins: [react()],
});
