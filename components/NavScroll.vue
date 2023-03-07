<script setup>
function buttonHandler () {
  window.location.href = '#'
}
</script>

<template>
  <button
    title="STORE"
    class="fixed z-90 bottom-[310px] right-8 bg-[#a36036] w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-24xl font-bold hover:bg-[#727272] hover:drop-shadow-2xl hover:animate-bounce duration-300"
    @click="buttonHandler"
  >
    STORE
  </button>
  <button
    title="Chat Button"
    class="fixed z-90 bottom-[220px] right-8 bg-yellow-400 w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-blue-700 hover:drop-shadow-2xl hover:animate-bounce duration-300"
    @click="buttonHandler"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-8 h-8"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
      />
    </svg>
  </button>
  <button
    title="TEL"
    class="fixed z-90 bottom-[130px] right-8 bg-[#a36036] w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-24xl font-bold hover:bg-[#727272] hover:drop-shadow-2xl hover:animate-bounce duration-300"
    @click="buttonHandler"
  >
    TEL
  </button>

  <button
    title="Go Top Button"
    class="fixed z-90 bottom-10 right-8 bg-[#a36036] w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-[#727272] hover:drop-shadow-2xl duration-300"
    @click="buttonHandler"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-8 h-8"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
      />
    </svg>
  </button>
</template>
