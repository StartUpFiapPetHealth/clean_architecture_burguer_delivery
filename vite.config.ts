import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/categories': 'https://burgerlivery-api.vercel.app',
      '/hamburgers': 'https://burgerlivery-api.vercel.app',
      '/appetizers': 'https://burgerlivery-api.vercel.app',
      '/desserts': 'https://burgerlivery-api.vercel.app',
      '/beverages': 'https://burgerlivery-api.vercel.app',
      '/payment/options': 'https://burgerlivery-api.vercel.app',
      '/order/create-order': 'https://burgerlivery-api.vercel.app',
      '/user/login': 'https://burgerlivery-api.vercel.app',
    }
  },
  plugins: [react(), tailwindcss(),],
})
