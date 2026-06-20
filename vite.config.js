import { defineConfig } from 'vite'

export default defineConfig({
  assetsInclude: ['**/*.glb', '**/*.gltf', '**/*.hdr'],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
