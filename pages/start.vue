<script setup>
import { useHead } from 'nuxt/app'
import AOS from 'aos'
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

onMounted(() => {
  initFlowbite()
  AOS.init()
})

useHead({
  title: '소미담 | 창업안내',
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
  name: 'StartPage'
}
</script>

<template>
  <NavBar />
  <div class="w-full h-[50rem] bg-[url('@/assets/startPic.webp')] bg-center bg-cover">
    <div class="flex flex-col items-center justify-center w-full h-[50rem] bg-orange-100 bg-opacity-50">
      <img
        src="~/assets/logo.svg"
        alt="Somidam Logo"
        width="150"
        height="150"
      >
      <div class="text-8xl font-cafe24 font-black mt-2 text-somidam">
        창업안내
      </div>
    </div>
  </div>
  <div class="grid 2xl:grid-cols-5 xl:grid-cols-3 sm:grid-cols-2 gap-y-10 lg:mx-52 sm:mx-auto my-28 justify-items-center">
    <div
      data-aos="fade-down"
      data-aos-delay="100"
      class="flex flex-col items-center justify-center rounded-full bg-[#F4EFEA] w-56 h-56"
    >
      <div class="text-somidam font-nanumsquare font-bold underline underline-offset-4 mb-1.5">
        STEP. 01
      </div>
      <div class="text-somidam font-nanumsquare font-extrabold text-2xl text-center">
        가맹 상담
      </div>
    </div>
    <div
      data-aos="fade-down"
      data-aos-delay="200"
      class="flex flex-col items-center justify-center rounded-full bg-[#F4EFEA] w-56 h-56"
    >
      <div class="text-somidam font-nanumsquare font-bold underline underline-offset-4 mb-1.5">
        STEP. 02
      </div>
      <div class="text-somidam font-nanumsquare font-extrabold text-2xl text-center">
        상권 분석
      </div>
    </div>
    <div
      data-aos="fade-down"
      data-aos-delay="300"
      class="flex flex-col items-center justify-center rounded-full bg-[#F4EFEA] w-56 h-56"
    >
      <div class="text-somidam font-nanumsquare font-bold underline underline-offset-4 mb-1.5">
        STEP. 03
      </div>
      <div class="text-somidam font-nanumsquare font-extrabold text-2xl text-center">
        점포 선정
      </div>
    </div>
    <div
      data-aos="fade-down"
      data-aos-delay="400"
      class="flex flex-col items-center justify-center rounded-full bg-[#F4EFEA] w-56 h-56"
    >
      <div class="text-somidam font-nanumsquare font-bold underline underline-offset-4 mb-1.5">
        STEP. 04
      </div>
      <div class="text-somidam font-nanumsquare font-extrabold text-2xl text-center">
        가맹 계약
      </div>
    </div>
    <div
      data-aos="fade-down"
      data-aos-delay="500"
      class="flex flex-col items-center justify-center rounded-full bg-[#F4EFEA] w-56 h-56"
    >
      <div class="text-somidam font-nanumsquare font-bold underline underline-offset-4 mb-1.5">
        STEP. 05
      </div>
      <div class="text-somidam font-nanumsquare font-extrabold text-2xl text-center">
        인테리어 및 <br>집기 계약 체결
      </div>
    </div>
    <div
      data-aos="fade-down"
      data-aos-delay="600"
      class="flex flex-col items-center justify-center rounded-full bg-[#F4EFEA] w-56 h-56"
    >
      <div class="text-somidam font-nanumsquare font-bold underline underline-offset-4 mb-1.5">
        STEP. 06
      </div>
      <div class="text-somidam font-nanumsquare font-extrabold text-2xl text-center">
        인허가 업무
      </div>
    </div>
    <div
      data-aos="fade-down"
      data-aos-delay="700"
      class="flex flex-col items-center justify-center rounded-full bg-[#F4EFEA] w-56 h-56"
    >
      <div class="text-somidam font-nanumsquare font-bold underline underline-offset-4 mb-1.5">
        STEP. 07
      </div>
      <div class="text-somidam font-nanumsquare font-extrabold text-2xl text-center">
        개점 일정 확정
      </div>
    </div>
    <div
      data-aos="fade-down"
      data-aos-delay="800"
      class="flex flex-col items-center justify-center rounded-full bg-[#F4EFEA] w-56 h-56"
    >
      <div class="text-somidam font-nanumsquare font-bold underline underline-offset-4 mb-1.5">
        STEP. 08
      </div>
      <div class="text-somidam font-nanumsquare font-extrabold text-2xl text-center">
        오픈 전 교육
      </div>
    </div>
    <div
      data-aos="fade-down"
      data-aos-delay="900"
      class="flex flex-col items-center justify-center rounded-full bg-[#F4EFEA] w-56 h-56"
    >
      <div class="text-somidam font-nanumsquare font-bold underline underline-offset-4 mb-1.5">
        STEP. 09
      </div>
      <div class="text-somidam font-nanumsquare font-extrabold text-2xl text-center">
        인테리어 및<br>집기 세팅 후<br>초도물품 입고
      </div>
    </div>
    <div
      data-aos="fade-down"
      data-aos-delay="1000"
      class="flex flex-col items-center justify-center rounded-full bg-somidam scale-50 opacity-0 intersect:scale-100 intersect:opacity-100 transition w-56 h-56"
    >
      <div class="text-[#F4EFEA] font-bold underline underline-offset-4 mb-1.5">
        STEP. 10
      </div>
      <div class="text-[#F4EFEA] font-extrabold text-2xl text-center">
        오픈
      </div>
    </div>
  </div>
  <div class="flex flex-col mx-4 2xl:mx-60 xl:mx-56 lg:mx-40 md:mx-24 sm:mx-12 mb-16">
    <div class="font-nanumsquare text-somidam font-bold md:text-lg text-sm mb-2">
      * 매장 여건에 따라 변동이 가능합니다.
    </div>
    <table class="border-collapse font-nanumsquare lg:text-xl md:text-lg text-sm">
      <thead class="bg-somidam text-[#F4EFEB] font-extrabold">
        <tr>
          <th class="border border-t-0 border-l-0 w-[18rem] p-4">
            구분
          </th>
          <th class="border border-t-0 w-[50rem] p-4">
            내용
          </th>
          <th class="border border-t-0 border-r-0 w-[18rem] p-4">
            비용
          </th>
        </tr>
      </thead>
      <tbody class="bg-[#F4EFEB] text-center text-somidam font-extrabold">
        <tr>
          <td class="border border-t-0 border-l-0 border-somidam p-4">
            가맹비
          </td>
          <td class="border border-somidam p-4">
            -
          </td>
          <td class="border border-t-0 border-r-0 border-somidam p-4">
            5,000,000
          </td>
        </tr>
        <tr>
          <td class="border border-t-0 border-l-0 border-somidam p-4">
            교육비
          </td>
          <td class="border border-somidam p-4">
            조리 / 경영 / 운영 일체
          </td>
          <td class="border border-t-0 border-r-0 border-somidam p-4">
            5,000,000
          </td>
        </tr>
        <tr>
          <td class="border border-t-0 border-l-0 border-somidam p-4">
            인테리어 1
          </td>
          <td class="border border-somidam p-4">
            <div class="flex flex-col">
              <div>
                항목 1. 내부공사(DID 메뉴 모니터 / 제작 쇼케이스, 음향포함)
              </div>
              <div>
                항목 2. 외부공사(입구 파사드 조성)
              </div>
              <div>
                * 소미담 메뉴얼 및 시공도면 제공
              </div>
            </div>
          </td>
          <td class="border border-t-0 border-r-0 border-somidam p-4">
            가맹점주 자율시공
          </td>
        </tr>
        <tr>
          <td class="border border-t-0 border-l-0 border-somidam p-4">
            인테리어 2
          </td>
          <td class="border border-somidam">
            본사 디자인
          </td>
          <td class="border border-t-0 border-r-0 border-somidam p-4">
            10,000,000
          </td>
        </tr>
        <tr>
          <td class="border border-t-0 border-l-0 border-somidam p-4">
            인테리어 3
          </td>
          <td class="border border-somidam p-4">
            본사 감독비
          </td>
          <td class="border border-t-0 border-r-0 border-somidam p-4">
            10,000,000
          </td>
        </tr>
        <tr>
          <td class="border border-t-0 border-l-0 border-somidam p-4">
            SIGN
          </td>
          <td class="border border-somidam p-4">
            간판 / 사인물
          </td>
          <td class="border border-t-0 border-r-0 border-somidam p-4">
            15,000,000
          </td>
        </tr>
        <tr>
          <td class="border border-t-0 border-l-0 border-somidam p-4">
            가구
          </td>
          <td class="border border-somidam p-4">
            의 / 탁자
          </td>
          <td class="border border-t-0 border-r-0 border-somidam p-4">
            9,500,000
          </td>
        </tr>
        <tr>
          <td class="border border-t-0 border-l-0 border-somidam p-4">
            기계설비
          </td>
          <td class="border border-somidam p-4">
            주방기기
          </td>
          <td class="border border-t-0 border-r-0 border-somidam p-4">
            52,000,000
          </td>
        </tr>
        <tr>
          <td class="border border-t-0 border-l-0 border-somidam p-4">
            초도물품
          </td>
          <td class="border border-somidam border-b-0 p-4">
            <div class="flex flex-col">
              <div>
                - 유텐실(POS, 주방집기, 비품)
              </div>
              <div>
                - 디스플레이(홍보물, 소품, 모형)
              </div>
              <div>
                - 기타(식자재, 부자재, 디저트)
              </div>
            </div>
          </td>
          <td class="border border-t-0 border-r-0 border-b-0 border-somidam p-4">
            추후 발주
          </td>
        </tr>
      </tbody>
      <tfoot class="bg-somidam text-[#F4EFEB] font-extrabold text-center">
        <tr>
          <td class="border border-t-0 border-l-0 p-4">
            총계
          </td>
          <td
            colspan="2"
            class="border border-r-0 border-t-0 p-4"
          >
            106,500,000 (VAT 별도)
          </td>
        </tr>
      </tfoot>
    </table>
    <div class="font-nanumsquare text-somidam font-bold md:text-lg text-sm mt-4">
      * 초도물품은 오픈전(본사 교육 중) 협의 발주
    </div>
    <div class="font-nanumsquare text-somidam font-bold md:text-lg text-sm my-2">
      * 인테리어 도급계약은 본 가맹점주와 인테리어 업체 간 양자 계약 진행
    </div>
    <div class="font-nanumsquare text-somidam font-bold md:text-lg text-sm">
      * 인테리어 공사 중 볃도공사제외: 키오스크, 냉난방, 소방, 전기증설, 화장실, 철거, 계단, 어닝, 용도변경 등 도면 포기 외 공사
    </div>
  </div>
  <div class="2xl:mx-60 xl:mx-56 lg:mx-40 md:mx-24 sm:mx-12 mx-4 mb-20">
    <h1 class="text-3xl font-extrabold font-nanumsquare mb-8">
      창업 자금 지원 제도 안내
    </h1>
    <h2 class="text-xl font-extrabold font-nanumsquare mb-2">
      지원기관
    </h2>
    <hr class="border-black border-[0.1rem]">
    <div
      id="accordion-flush"
      data-accordion="collapse"
      data-active-classes="bg-white"
      data-inactive-classes="text-gray-500"
    >
      <h2 id="accordion-flush-heading-1">
        <button
          type="button"
          class="flex items-center justify-between w-full py-5 font-nanumsquare font-extrabold text-left border-b border-gray-200"
          data-accordion-target="#accordion-flush-body-1"
          aria-expanded="false"
          aria-controls="accordion-flush-body-1"
        >
          <span>근로복지공단</span>
          <svg
            data-accordion-icon
            class="w-6 h-6 rotate-180 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          ><path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          /></svg>
        </button>
      </h2>
      <div
        id="accordion-flush-body-1"
        class="hidden"
        aria-labelledby="accordion-flush-heading-1"
      >
        <div class="py-5 font-bold border-b border-gray-200">
          <p class="font-nanumsquare text-sm">
            자금명: 장기 실업자 자금 / 실직 여성 자영업 자금
          </p>
          <p class="font-nanumsquare text-sm">
            대상자: 현장 실습 단기 창업 교육 이수자
          </p>
          <p class="font-nanumsquare text-sm">
            금리: 3.4%
          </p>
          <p class="font-nanumsquare text-sm">
            대출 금액: 최대 10,000,000원
          </p>
        </div>
      </div>
      <h2 id="accordion-flush-heading-2">
        <button
          type="button"
          class="flex items-center justify-between w-full py-5 font-nanumsquare font-extrabold text-left border-b border-gray-200"
          data-accordion-target="#accordion-flush-body-2"
          aria-expanded="false"
          aria-controls="accordion-flush-body-2"
        >
          <span>서울시</span>
          <svg
            data-accordion-icon
            class="w-6 h-6 rotate-180 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          ><path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          /></svg>
        </button>
      </h2>
      <div
        id="accordion-flush-body-2"
        class="hidden"
        aria-labelledby="accordion-flush-heading-2"
      >
        <div class="py-5 font-bold border-b border-gray-200">
          <p class="font-nanumsquare text-sm">
            자금명: 서울시 자영업자 유동성 특례보존에 의한 운영자금
          </p>
          <p class="font-nanumsquare text-sm">
            대상자: 서울시 소재 사업자 등록 후 6개월 이상 운영자
          </p>
          <p class="font-nanumsquare text-sm">
            금리: 5~6%
          </p>
          <p class="font-nanumsquare text-sm mb-4">
            대출 금액: 최대 20,000,000원
          </p>
          <p class="font-nanumsquare text-sm">
            자금명: 서울시 중소기업 육성 자금에 의한 임차자금
          </p>
          <p class="font-nanumsquare text-sm">
            대상자: 창업 교육 이수 및 사업 컨설팅 받은 자로서 3개월 내 창업자 또는 업종 전환자
          </p>
          <p class="font-nanumsquare text-sm">
            금리: CD 연동금리에 서울시가 보전한 변동금리
          </p>
          <p class="font-nanumsquare text-sm">
            대출 금액: 최대 30,000,000~50,000,000원
          </p>
        </div>
      </div>
      <h2 id="accordion-flush-heading-3">
        <button
          type="button"
          class="flex items-center justify-between w-full py-5 font-nanumsquare font-extrabold text-left border-b border-gray-200"
          data-accordion-target="#accordion-flush-body-3"
          aria-expanded="false"
          aria-controls="accordion-flush-body-3"
        >
          <span>소상공인지원센터</span>
          <svg
            data-accordion-icon
            class="w-6 h-6 rotate-180 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          ><path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          /></svg>
        </button>
      </h2>
      <div
        id="accordion-flush-body-3"
        class="hidden"
        aria-labelledby="accordion-flush-heading-3"
      >
        <div class="py-5 font-bold border-b border-gray-200">
          <p class="font-nanumsquare text-sm">
            대상자: 창업자 교육 12시간 이수한 자로서 점포 임대 계약자
          </p>
          <p class="font-nanumsquare text-sm">
            금리: 5.7%
          </p>
          <p class="font-nanumsquare text-sm">
            대출 금액: 최대 50,000,000원
          </p>
        </div>
      </div>
      <h2 id="accordion-flush-heading-4">
        <button
          type="button"
          class="flex items-center justify-between w-full py-5 font-nanumsquare font-extrabold text-left border-b border-gray-200"
          data-accordion-target="#accordion-flush-body-4"
          aria-expanded="false"
          aria-controls="accordion-flush-body-4"
        >
          <span>여성경제인협회</span>
          <svg
            data-accordion-icon
            class="w-6 h-6 rotate-180 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          ><path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          /></svg>
        </button>
      </h2>
      <div
        id="accordion-flush-body-4"
        class="hidden"
        aria-labelledby="accordion-flush-heading-4"
      >
        <div class="py-5 font-bold border-b border-gray-200">
          <p class="font-nanumsquare text-sm">
            자금명: 여성가장 창업자금 지원사업(점포 임대 보증금 지원)
          </p>
          <p class="font-nanumsquare text-sm">
            대상자: 여성가장으로서 부양가족이 1인 이상인 자
          </p>
          <p class="font-nanumsquare text-sm">
            금리: 2%
          </p>
          <p class="font-nanumsquare text-sm">
            대출 금액: 최대 50,000,000원
          </p>
        </div>
      </div>
      <h2 id="accordion-flush-heading-5">
        <button
          type="button"
          class="flex items-center justify-between w-full py-5 font-nanumsquare font-extrabold text-left border-b border-gray-200"
          data-accordion-target="#accordion-flush-body-5"
          aria-expanded="false"
          aria-controls="accordion-flush-body-5"
        >
          <span>장애인고용촉진공단</span>
          <svg
            data-accordion-icon
            class="w-6 h-6 rotate-180 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          ><path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          /></svg>
        </button>
      </h2>
      <div
        id="accordion-flush-body-5"
        class="hidden"
        aria-labelledby="accordion-flush-heading-5"
      >
        <div class="py-5 font-bold border-b border-gray-200">
          <p class="font-nanumsquare text-sm">
            자금명: 자영업 창업자금(점포 임대 보증금 및 시설자금 지원)
          </p>
          <p class="font-nanumsquare text-sm">
            대상자: 창업 희망 장애인(창업 교육을 이수한 자)
          </p>
          <p class="font-nanumsquare text-sm">
            금리: 3%
          </p>
          <p class="font-nanumsquare text-sm">
            대출 금액: 최대 50,000,000원
          </p>
        </div>
      </div>
      <h2 id="accordion-flush-heading-6">
        <button
          type="button"
          class="flex items-center justify-between w-full py-5 font-nanumsquare font-extrabold text-left border-b border-gray-200"
          data-accordion-target="#accordion-flush-body-6"
          aria-expanded="false"
          aria-controls="accordion-flush-body-6"
        >
          <span>미소금융재단</span>
          <svg
            data-accordion-icon
            class="w-6 h-6 rotate-180 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          ><path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          /></svg>
        </button>
      </h2>
      <div
        id="accordion-flush-body-6"
        class="hidden"
        aria-labelledby="accordion-flush-heading-6"
      >
        <div class="py-5 font-bold border-b border-gray-200">
          <p class="font-nanumsquare text-sm">
            자금명: 프랜차이즈 창업자금 대출/창업 임차자금 대출
          </p>
          <p class="font-nanumsquare text-sm">
            대상자: 현장 실습 단기 창업 교육 이수자
          </p>
          <p class="font-nanumsquare text-sm">
            금리: 4.5%
          </p>
          <p class="font-nanumsquare text-sm mb-4">
            대출 금액: 최대 50,000,000원
          </p>
          <p class="font-nanumsquare text-sm">
            자금명: 운영자금대출/시설개선 자금대출
          </p>
          <p class="font-nanumsquare text-sm">
            금리: 4.5%
          </p>
          <p class="font-nanumsquare text-sm">
            대출 금액: 최대 10,000,000원
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
