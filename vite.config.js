import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base: './' makes every asset URL relative, so the build works from ANY
// location: https://user.github.io/, https://user.github.io/any-repo-name/,
// a custom domain, or a plain static server. No repo name needs to be configured.
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: { outDir: 'dist', sourcemap: false },
});
