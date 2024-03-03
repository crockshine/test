import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'


const vitePWA = VitePWA(
  {registerType:"autoUpdate",
  outDir:"build",

  manifest:{
    name:"test",
    short_name:"test",
    description:"test",
    icons:[
      {
      src:"icons/android-chrome-192x192.png",
      sizes:"192x192",
      type:"image.png"
      },
      {
      src:"icons/android-chrome-512x512.png",
      sizes:"512x512",
      type:"image/png" 
      }]

  }
},
  {})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),vitePWA],
  base:"/test/"
})
