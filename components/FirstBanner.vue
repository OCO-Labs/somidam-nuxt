<script>
import NavBar from './NavBar.vue'
import NavScroll from './NavScroll.vue'
export default {
  name: 'FirstBanner',
  components: { NavScroll, NavBar }
}
</script>

<template>
  <div class="h-screen w-screen overflow-scroll scroll-smooth">
    <NavScroll />
    <div class="h-screen w-screen">
      <NavBar />
      <img
        src="~/assets/somidam_logo.svg"
        class="object-contain h-screen w-screen bg-white mx-auto"
      >
    </div>
    <div class="h-screen w-screen">
      <img
        src="~/assets/somidam_logo.svg"
        class="object-contain h-screen w-full bg-black mx-auto"
      >
    </div>

    <div class="h-screen w-screen">
      <img
        src="~/assets/somidam_logo.svg"
        class="object-contain h-screen w-full bg-white mx-auto"
      >
    </div>
    <div class="h-screen w-screen">
      <img
        src="~/assets/somidam_logo.svg"
        class="object-contain h-screen w-full bg-black mx-auto"
      >
    </div>
    <div class="h-screen w-screen">
      <img
        src="~/assets/somidam_logo.svg"
        class="object-contain h-screen w-full bg-black mx-auto"
      >
    </div>
  </div>
</template>
