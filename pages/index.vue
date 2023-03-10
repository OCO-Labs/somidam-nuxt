<script>
import FirstBanner from '~/components/FirstBanner.vue'
export default {
  name: 'IndexPage',
  components: {
    FirstBanner
  }
}
</script>

<template>
  <Head>
    <Title>소미담</Title>
    <Meta
      name="description"
      content="본디'소' 쌀'미' 담을'담' 재료 본연의 맛과 향을 담아 항상 좋은 재료와 정성으로 건강하고 맛있는 떡을 만들겠습니다."
    />
  </Head>
  <FirstBanner />
</template>
