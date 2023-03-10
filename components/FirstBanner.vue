<script>
import NavBar from './NavBar.vue'
import NavScroll from './NavScroll.vue'
export default {
  name: 'FirstBanner',
  components: { NavScroll, NavBar }
}
</script>

<template>
  <div class="snap-y snap-mandatory h-screen w-screen overflow-scroll">
    <div class="snap-start h-screen w-screen bg-[url('@/assets/startPic.webp')] bg-center bg-cover ">
      <div class="flex flex-col items-center justify-center w-screen h-screen bg-black 0 bg-opacity-90">
        <img
          src="~/assets/somidam_logo.svg"
          class="object-contain h-52 w-52 mx-auto"
        >
      </div>
    </div>
    <NavScroll />
    <div class="snap-start h-screen w-screen">
      <NavBar />
      <img
        src="~/assets/somidam_logo.svg"
        class="object-contain h-screen w-screen bg-white mx-auto"
      >
    </div>
    <div class="snap-start h-screen w-screen">
      <img
        src="~/assets/somidam_logo.svg"
        class="object-contain h-screen w-full bg-black mx-auto"
      >
    </div>

    <div class="snap-start h-screen w-screen">
      <img
        src="~/assets/somidam_logo.svg"
        class="object-contain h-screen w-full bg-white mx-auto"
      >
    </div>
    <div class="snap-start h-screen w-screen">
      <img
        src="~/assets/somidam_logo.svg"
        class="object-contain h-screen w-full bg-black mx-auto"
      >
    </div>
    <div class="snap-start h-screen w-screen">
      <img
        src="~/assets/somidam_logo.svg"
        class="object-contain h-screen w-full bg-black mx-auto"
      >
    </div>
  </div>
</template>
