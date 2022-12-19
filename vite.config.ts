import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "path";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
     "@global": path.resolve(__dirname, "./src/global"),
     "@pages": path.resolve(__dirname, "./src/pages")
    }
  }
})
