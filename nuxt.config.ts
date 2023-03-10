// https://nuxt.com/docs/api/configuration/nuxt-config
import eslintPlugin from 'vite-plugin-eslint'

// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  plugins: [
    { src: '~/plugins/aos', mode: 'client' },
    { src: '~/plugins/vercel.js', mode: 'client' }
  ],
  vite: {
    plugins: [
      eslintPlugin()
    ]
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1'
    }
  }
})
