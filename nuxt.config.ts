// https://nuxt.com/docs/api/configuration/nuxt-config
import eslintPlugin from 'vite-plugin-eslint'

// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  plugins: [
    { src: '~/plugins/aos', mode: 'client' }
  ],
  vite: {
    plugins: [
      eslintPlugin()
    ]
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: '소미담',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description', content: '재료 본연의 맛과 정성을 담아 만든 떡' }
      ]
    }
  }
})
