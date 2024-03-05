import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: '0.0.0.0'
  },
  css: {
    devSourcemap: true
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src')
    }
  },
  define: {
    // By default, Vite doesn't include shims for NodeJS/
    // necessary for segment analytics lib to work
    global: {}
  }
})
