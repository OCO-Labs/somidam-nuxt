<script setup>
import { useHead } from 'nuxt/app'

useHead({
  title: '소미담',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: '재료 본연의 맛과 정성을 담아 만든 떡'
    }
  ],
  link: [{ rel: 'canonical', href: 'https://www.somidam.co.kr/' }]
})
</script>

<script>
export default {
  name: 'IndexPage'
}
</script>

<template>
  <FirstBanner />
</template>
