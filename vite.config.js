import { defineConfig } from 'vite'

export default defineConfig({
  assetsInclude: ['**/*.glb', '**/*.gltf', '**/*.hdr'],
  server: {
    // Pinned so the dev URL is always the same. strictPort makes Vite fail
    // loudly on a conflict instead of silently moving to another port.
    port: 5173,
    strictPort: true,
    open: true,
  },
  preview: {
    port: 5173,
    strictPort: true,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
