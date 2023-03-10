<script setup>
import { useHead } from 'nuxt/app'

useHead({
  htmlAttrs: { lang: 'ko' }
})
</script>

<template>
  <div>
    <NuxtPage />
    <CopyFooter />
  </div>
</template>
