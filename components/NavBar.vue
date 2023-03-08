<template>
  <div class="border-b">
    <div class="container flex sm:flex-row flex-col items-center justify-between sm:mx-auto sm:px-0 px-4 my-4">
      <img
        src="~/assets/logo.svg"
        alt="Somidam Logo"
        width="110"
        height="110"
      >
      <div class="flex flex-col sm:flex-row md:space-x-6 sm:space-x-8">
        <div class="flex sm:pt-0 pt-4 md:space-x-6 sm:space-x-3">
          <nuxt-link
            to="/"
            class="text-somidam font-nanumsquare font-extrabold hover:bg-gray-100 rounded px-4 py-2"
          >
            브랜드
          </nuxt-link>
          <nuxt-link
            to="/menu"
            class="text-somidam font-nanumsquare font-extrabold hover:bg-gray-100 rounded px-2 py-2"
          >
            메뉴
          </nuxt-link>
          <nuxt-link
            to="/start"
            class="text-somidam font-nanumsquare font-extrabold hover:bg-gray-100 rounded px-2 py-2"
          >
            창업안내
          </nuxt-link>
          <nuxt-link
            to="/join"
            class="text-somidam font-nanumsquare font-extrabold hover:bg-gray-100 rounded px-2 py-2"
          >
            가맹안내
          </nuxt-link>
        </div>
        <!-- <div class="flex justify-between space-x-3 sm:pt-0 pt-4">
          <img
            src="../assets/sns/facebook.svg"
            alt="facebook"
            width="12"
            height="12"
          >
          <img
            src="../assets/sns/instagram.svg"
            alt="instagram"
            width="12"
            height="12"
          >
          <img
            src="../assets/sns/youtube.svg"
            alt="youtube"
            width="12"
            height="12"
          >
          <img
            src="../assets/sns/naver.svg"
            alt="naver"
            width="12"
            height="12"
          >
          <img
            src="../assets/sns/tiktok.svg"
            alt="tiktok"
            width="12"
            height="12"
          >
        </div> -->
      </div>
    </div>
  </div>
</template>
