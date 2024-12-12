import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@features': path.resolve(__dirname, 'src/presentation/features'),
      '@components': path.resolve(__dirname, 'src/presentation/components'),
      '@entities': path.resolve(__dirname, 'src/domain/entities'),
      '@usecases': path.resolve(__dirname, 'src/domain/usecases'),
      '@repositories': path.resolve(__dirname, 'src/data/repositories'),
      '@networks': path.resolve(__dirname, 'src/data/networks'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    },
  },
})
