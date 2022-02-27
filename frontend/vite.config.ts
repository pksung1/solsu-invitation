import { defineConfig } from 'vite'
import {adorableCSS} from "adorable-css/vite-plugin-adorable-css"
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [adorableCSS(), react()],
  resolve: {
    alias : { 
      './runtimeConfig' : './runtimeConfig.browser'
    }
  },
})
