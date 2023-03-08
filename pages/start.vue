<script>
import NavBar from '~/components/NavBar.vue'
import AOS from 'aos'

export default {
  name: 'StartPage',
  components: {
    NavBar
  },
  mounted () {
    AOS.init()
  }
}
</script>

<template>
  <Head>
    <Title>창업안내</Title>
    <Meta
      name="description"
      content="창업안내"
    />
  </Head>
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
</template>
