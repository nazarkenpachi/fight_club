import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/fight_club/',
  plugins: [react()],
  assetsInclude: ['**/*.PNG', '**/*.MP4'],
})
