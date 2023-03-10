<script setup>
import { useHead } from 'nuxt/app'

useHead({
  title: '소미담 | 메뉴',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: '재료 본연의 맛과 정성을 담아 만든 떡'
    }
  ]
})
</script>

<script>
export default {
  name: 'MenuPage'
}
</script>

<template>
  <NavBar />
  <div class="container mx-auto">
    <div class="flex flex-col items-center">
      <img
        class="mt-32"
        loading="lazy"
        src="~/assets/logo.svg"
        alt="Somidam Logo"
        width="150"
        height="150"
      >
      <div class="text-somidam font-cafe24 sm:text-9xl text-8xl font-bold mt-3">
        MENU
      </div>
      <div class="text-somidam font-nanumsquare sm:text-xl text-lg font-semibold">
        찾으시는 메뉴를 클릭해서 확인해보세요
      </div>
    </div>
    <div class="flex items-center justify-center space-x-6 mt-28">
      <div class="text-somidam font-cafe24 lg:text-5xl sm:text-4xl text-3xl font-bold">
        DESSERT MENU
      </div>
      <hr class="2xl:w-[52rem] xl:w-[49rem] lg:w-[38rem] hidden md:block md:w-1/2 h-0.5 bg-somidam">
    </div>
    <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 2xl:mx-40 xl:mx-14 lg:mx-4 mx-5 mt-10 mb-32">
      <div class="overflow-hidden shadow-lg hover:scale-105 bg-white transform transition duration-100">
        <img
          class="w-full"
          loading="lazy"
          src="~/assets/dessert/1.webp"
          alt=""
        >
        <div class="flex flex-col items-center py-10">
          <div class="font-extrabold font-nanumsquare xl:text-3xl text-2xl text-somidam mb-1">
            소미담 모듬떡 세트
          </div>
          <span class="text-gray-400 font-nanumsquare text-base mb-6">
            16,800원
          </span>
          <router-link
            to="/"
            type="button"
            class="text-somidam font-nanumsquare bg-white border-2 border-somidam focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-bold rounded-full text-xl px-6"
          >
            자세히보기
          </router-link>
        </div>
      </div>
      <div class="overflow-hidden shadow-lg hover:scale-105 bg-white transform transition duration-100">
        <img
          class="w-full"
          loading="lazy"
          src="~/assets/dessert/2.webp"
          alt=""
        >
        <div class="flex flex-col items-center py-10">
          <div class="font-extrabold font-nanumsquare xl:text-3xl text-2xl text-somidam mb-1">
            자색 고구마 크림떡
          </div>
          <span class="text-gray-400 font-nanumsquare text-base mb-6">
            16,800원
          </span>
          <router-link
            to="/"
            type="button"
            class="text-somidam font-nanumsquare bg-white border-2 border-somidam focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-bold rounded-full text-xl px-6"
          >
            자세히보기
          </router-link>
        </div>
      </div>
      <div class="overflow-hidden shadow-lg hover:scale-105 bg-white transform transition duration-100">
        <img
          class="w-full"
          loading="lazy"
          src="~/assets/dessert/3.webp"
          alt=""
        >
        <div class="flex flex-col items-center py-10">
          <div class="font-extrabold font-nanumsquare xl:text-3xl text-2xl text-somidam mb-1">
            카스테라 옥수수 크림떡
          </div>
          <span class="text-gray-400 font-nanumsquare text-base mb-6">
            16,800원
          </span>
          <router-link
            to="/"
            type="button"
            class="text-somidam font-nanumsquare bg-white border-2 border-somidam focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-bold rounded-full text-xl px-6"
          >
            자세히보기
          </router-link>
        </div>
      </div>
      <div class="overflow-hidden shadow-lg hover:scale-105 bg-white transform transition duration-100">
        <img
          class="w-full"
          loading="lazy"
          src="~/assets/dessert/4.webp"
          alt=""
        >
        <div class="flex flex-col items-center py-10">
          <div class="font-extrabold font-nanumsquare xl:text-3xl text-2xl text-somidam mb-1">
            쑥 두텁떡
          </div>
          <span class="text-gray-400 font-nanumsquare text-base mb-6">
            14,400원
          </span>
          <router-link
            to="/"
            type="button"
            class="text-somidam font-nanumsquare bg-white border-2 border-somidam focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-bold rounded-full text-xl px-6"
          >
            자세히보기
          </router-link>
        </div>
      </div>
      <div class="overflow-hidden shadow-lg hover:scale-105 bg-white transform transition duration-100">
        <img
          class="w-full"
          loading="lazy"
          src="~/assets/dessert/5.webp"
          alt=""
        >
        <div class="flex flex-col items-center py-10">
          <div class="font-extrabold font-nanumsquare xl:text-3xl text-2xl text-somidam mb-1">
            흑임자 인절미
          </div>
          <span class="text-gray-400 font-nanumsquare text-base mb-6">
            18,000원
          </span>
          <router-link
            to="/"
            type="button"
            class="text-somidam font-nanumsquare bg-white border-2 border-somidam focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-bold rounded-full text-xl px-6"
          >
            자세히보기
          </router-link>
        </div>
      </div>
      <div class="overflow-hidden shadow-lg hover:scale-105 bg-white transform transition duration-100">
        <img
          class="w-full"
          loading="lazy"
          src="~/assets/dessert/6.webp"
          alt=""
        >
        <div class="flex flex-col items-center py-10">
          <div class="font-extrabold font-nanumsquare xl:text-3xl text-2xl text-somidam mb-1">
            이북식 인절미
          </div>
          <span class="text-gray-400 font-nanumsquare text-base mb-6">
            16,800원
          </span>
          <router-link
            to="/"
            type="button"
            class="text-somidam font-nanumsquare bg-white border-2 border-somidam focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-bold rounded-full text-xl px-6"
          >
            자세히보기
          </router-link>
        </div>
      </div>
      <div class="overflow-hidden shadow-lg hover:scale-105 bg-white transform transition duration-100">
        <img
          class="w-full"
          loading="lazy"
          src="~/assets/dessert/7.webp"
          alt=""
        >
        <div class="flex flex-col items-center py-10">
          <div class="font-extrabold font-nanumsquare xl:text-3xl text-2xl text-somidam mb-1">
            카스테라 호박 인절미
          </div>
          <span class="text-gray-400 font-nanumsquare text-base mb-6">
            16,800원
          </span>
          <router-link
            to="/"
            type="button"
            class="text-somidam font-nanumsquare bg-white border-2 border-somidam focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-bold rounded-full text-xl px-6"
          >
            자세히보기
          </router-link>
        </div>
      </div>
      <div class="overflow-hidden shadow-lg hover:scale-105 bg-white transform transition duration-100">
        <img
          class="w-full"
          loading="lazy"
          src="~/assets/dessert/8.webp"
          alt=""
        >
        <div class="flex flex-col items-center py-10">
          <div class="font-extrabold font-nanumsquare xl:text-3xl text-2xl text-somidam mb-1">
            사색기정떡
          </div>
          <span class="text-gray-400 font-nanumsquare text-base mb-6">
            16,800원
          </span>
          <router-link
            to="/"
            type="button"
            class="text-somidam font-nanumsquare bg-white border-2 border-somidam focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-bold rounded-full text-xl px-6"
          >
            자세히보기
          </router-link>
        </div>
      </div>
      <div class="overflow-hidden shadow-lg hover:scale-105 bg-white transform transition duration-100">
        <img
          class="w-full"
          loading="lazy"
          src="~/assets/dessert/9.webp"
          alt=""
        >
        <div class="flex flex-col items-center py-10">
          <div class="font-extrabold font-nanumsquare xl:text-3xl text-2xl text-somidam mb-1">
            콩고물 인절미
          </div>
          <span class="text-gray-400 font-nanumsquare text-base mb-6">
            16,800원
          </span>
          <router-link
            to="/"
            type="button"
            class="text-somidam font-nanumsquare bg-white border-2 border-somidam focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-bold rounded-full text-xl px-6"
          >
            자세히보기
          </router-link>
        </div>
      </div>
      <div class="overflow-hidden shadow-lg hover:scale-105 bg-white transform transition duration-100">
        <img
          class="w-full"
          loading="lazy"
          src="~/assets/dessert/10.webp"
          alt=""
        >
        <div class="flex flex-col items-center py-10">
          <div class="font-extrabold font-nanumsquare xl:text-3xl text-2xl text-somidam mb-1">
            꿀떡
          </div>
          <span class="text-gray-400 font-nanumsquare text-base mb-6">
            16,800원
          </span>
          <router-link
            to="/"
            type="button"
            class="text-somidam font-nanumsquare bg-white border-2 border-somidam focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-bold rounded-full text-xl px-6"
          >
            자세히보기
          </router-link>
        </div>
      </div>
      <div class="overflow-hidden shadow-lg hover:scale-105 bg-white transform transition duration-100">
        <img
          class="w-full"
          loading="lazy"
          src="~/assets/dessert/11.webp"
          alt=""
        >
        <div class="flex flex-col items-center py-10">
          <div class="font-extrabold font-nanumsquare xl:text-3xl text-2xl text-somidam mb-1">
            쑥콩찰떡
          </div>
          <span class="text-gray-400 font-nanumsquare text-base mb-6">
            16,800원
          </span>
          <router-link
            to="/"
            type="button"
            class="text-somidam font-nanumsquare bg-white border-2 border-somidam focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-bold rounded-full text-xl px-6"
          >
            자세히보기
          </router-link>
        </div>
      </div>
      <div class="overflow-hidden shadow-lg hover:scale-105 bg-white transform transition duration-100">
        <img
          class="w-full"
          loading="lazy"
          src="~/assets/dessert/12.webp"
          alt=""
        >
        <div class="flex flex-col items-center py-10">
          <div class="font-extrabold font-nanumsquare xl:text-3xl text-2xl text-somidam mb-1">
            바람떡
          </div>
          <span class="text-gray-400 font-nanumsquare text-base mb-6">
            16,800원
          </span>
          <router-link
            to="/"
            type="button"
            class="text-somidam font-nanumsquare bg-white border-2 border-somidam focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-bold rounded-full text-xl px-6"
          >
            자세히보기
          </router-link>
        </div>
      </div>
      <div class="overflow-hidden shadow-lg hover:scale-105 bg-white transform transition duration-100">
        <img
          class="w-full"
          loading="lazy"
          src="~/assets/dessert/13.webp"
          alt=""
        >
        <div class="flex flex-col items-center py-10">
          <div class="font-extrabold font-nanumsquare xl:text-3xl text-2xl text-somidam mb-1">
            찹쌀 약밥
          </div>
          <span class="text-gray-400 font-nanumsquare text-base mb-6">
            16,800원
          </span>
          <router-link
            to="/"
            type="button"
            class="text-somidam font-nanumsquare bg-white border-2 border-somidam focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-bold rounded-full text-xl px-6"
          >
            자세히보기
          </router-link>
        </div>
      </div>
      <div class="overflow-hidden shadow-lg hover:scale-105 bg-white transform transition duration-100">
        <img
          class="w-full"
          loading="lazy"
          src="~/assets/dessert/14.webp"
          alt=""
        >
        <div class="flex flex-col items-center py-10">
          <div class="font-extrabold font-nanumsquare xl:text-3xl text-2xl text-somidam mb-1">
            통팥 앙금 절편
          </div>
          <span class="text-gray-400 font-nanumsquare text-base mb-6">
            16,800원
          </span>
          <router-link
            to="/"
            type="button"
            class="text-somidam font-nanumsquare bg-white border-2 border-somidam focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-bold rounded-full text-xl px-6"
          >
            자세히보기
          </router-link>
        </div>
      </div>
      <div class="overflow-hidden shadow-lg hover:scale-105 bg-white transform transition duration-100">
        <img
          class="w-full"
          loading="lazy"
          src="~/assets/dessert/15.webp"
          alt=""
        >
        <div class="flex flex-col items-center py-10">
          <div class="font-extrabold font-nanumsquare xl:text-3xl text-2xl text-somidam mb-1">
            제주 오메기 떡
          </div>
          <span class="text-gray-400 font-nanumsquare text-base mb-6">
            16,800원
          </span>
          <router-link
            to="/"
            type="button"
            class="text-somidam font-nanumsquare bg-white border-2 border-somidam focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-bold rounded-full text-xl px-6"
          >
            자세히보기
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
