<script>
import NavBar from '~/components/NavBar.vue'

export default {
  name: 'JoinView',
  components: {
    NavBar
  }
}
</script>

<template>
  <Head>
    <Title>가맹문의</Title>
    <Meta
      name="description"
      content="가맹문의"
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
        가맹문의
      </div>
      <div class="mt-3 text-somidam font-nanumsquare text-2xl mx-16">
        <div class="mb-2">
          <div class="font-extrabold inline">
            창업 성공을 위한 든든한 파트너
          </div>
          가 되도록 노력하겠습니다.
        </div>
        <div>가맹점 관련하여 궁금한 점은 언제든 문의주시기 바랍니다.</div>
      </div>
    </div>
  </div>
  <div class="2xl:mx-64 xl:50 lg:mx-20 sm:mx-10 mx-2 mt-20">
    <div class="flex text-lg mb-3 justify-between">
      <div class="flex">
        <div class="font-bold">
          상담 희망자 정보&nbsp;
        </div>
        <div class="text-sm flex items-end">
          * 항목은 필수 입력 사항입니다.
        </div>
      </div>
      <div class="text-sm flex items-end text-somidam">
        이 화면은 PC에 적합합니다.
      </div>
    </div>
    <hr class="border-black border-1 mb-6">
    <div class="flex flex-col">
      <div class="flex flex-wrap">
        <div class="flex mr-10">
          <div class="w-28 flex items-center">
            <div class="font-bold">
              이름&nbsp;
            </div>
            <div>*</div>
          </div>
          <input
            type="text"
            class="form-input rounded border-gray-300 bg-gray-100 w-[20.5rem]"
          >
        </div>
        <div class="flex mr-10 md:mt-0 sm:mt-2">
          <div class="w-28 flex items-center">
            <div class="font-bold">
              성별&nbsp;
            </div>
            <div>*</div>
          </div>
          <select
            placeholder="선택"
            class="form-select rounded border-gray-300 bg-gray-100 w-64"
          >
            <option>선택</option>
            <option>남자</option>
            <option>여자</option>
          </select>
        </div>
        <div class="flex mr-10">
          <div class="w-28 flex items-center">
            <div class="font-bold">
              연령&nbsp;
            </div>
            <div>*</div>
          </div>
          <select class="form-select rounded border-gray-300 bg-gray-100 w-64">
            <option>선택</option>
            <option
              v-for="i in 100"
              :key="i"
            >
              {{ i }}
            </option>
          </select>
        </div>
      </div>
      <div class="flex flex-wrap mt-8">
        <div class="flex mr-10">
          <div class="w-28 flex items-center">
            <div class="font-bold">
              휴대전화&nbsp;
            </div>
            <div>*</div>
          </div>
          <select class="form-select rounded border-gray-300 bg-gray-100 w-28 mr-2">
            <option>선택</option>
            <option>010</option>
            <option>012</option>
          </select>
          <input
            type="text"
            class="form-input rounded border-gray-300 bg-gray-100 w-[13rem]"
          >
        </div>
        <div class="flex mr-10 md:mt-0 sm:mt-2">
          <div class="w-28 flex items-center">
            <div class="font-bold">
              이메일&nbsp;
            </div>
            <div>*</div>
          </div>
          <input
            type="text"
            class="form-input rounded border-gray-300 bg-gray-100 w-[16rem]"
          >
          <div class="mx-2 flex items-center">
            @
          </div>
          <select class="form-select rounded border-gray-300 bg-gray-100 w-40 mr-2">
            <option>선택</option>
            <option>naver.com</option>
            <option>gmail.com</option>
            <option>daum.net</option>
            <option>kakao.com</option>
            <option>outlook.com</option>
            <option>icloud.com</option>
          </select>
        </div>
      </div>
      <hr class="border-black border-1 my-6">
      <div class="flex mr-10">
        <div class="w-28 flex items-center">
          <div class="font-bold">
            신청계기&nbsp;
          </div>
          <div>*</div>
        </div>
        <div class="flex flex-col">
          <div class="flex">
            <div>
              <input
                class="form-checkbox mr-1"
                type="checkbox"
                value="페이스북"
              >
              <label
                for="페이스북"
                class="mr-4"
              >페이스북</label>
              <input
                class="form-checkbox mr-1"
                type="checkbox"
                value="인스타그램"
              >
              <label
                for="인스타그램"
                class="mr-4"
              >인스타그램</label>
              <input
                class="form-checkbox mr-1"
                type="checkbox"
                value="블로그"
              >
              <label
                for="블로그"
                class="mr-4"
              >블로그</label>
              <input
                class="form-checkbox mr-1"
                type="checkbox"
                value="카카오"
              >
              <label
                for="카카오"
                class="mr-4"
              >카카오</label>
              <input
                class="form-checkbox mr-1"
                type="checkbox"
                value="유튜브"
              >
              <label
                for="유튜브"
                class="mr-4"
              >유튜브</label>
              <input
                class="form-checkbox mr-1"
                type="checkbox"
                value="네이버"
              >
              <label
                for="네이버"
                class="mr-4"
              >네이버</label>
              <input
                class="form-checkbox mr-1"
                type="checkbox"
                value="지인소개"
              >
              <label
                for="지인소개"
                class="mr-4"
              >지인소개</label>
              <input
                class="form-checkbox mr-1"
                type="checkbox"
                value="매장방문"
              >
              <label
                for="매장방문"
                class="mr-4"
              >매장방문</label>
              <input
                class="form-checkbox mr-1"
                type="checkbox"
                value="창업 컨설팅"
              >
              <label for="창업 컨설팅">창업 컨설팅</label>
            </div>
          </div>
          <div class="mt-4">
            <input
              class="form-checkbox mr-1"
              type="checkbox"
              value="기타(직접 입력)"
            >
            <label
              for="기타(직접 입력)"
              class="mr-2"
            >기타(직접 입력)</label>
            <input
              type="text"
              class="form-input rounded disabled:bg-gray-200 border-gray-300 bg-gray-100 w-[20rem]"
            >
          </div>
        </div>
      </div>
      <div class="flex mr-10 my-8">
        <div class="w-28 flex items-center">
          <div class="font-bold">
            거주지역&nbsp;
          </div>
        </div>
        <input
          type="text"
          placeholder="시/도"
          class="form-input rounded border-gray-300 bg-gray-100 w-[10rem] mr-2"
        >
        <input
          type="text"
          placeholder="구/군"
          class="form-input rounded border-gray-300 bg-gray-100 w-[13rem]"
        >
      </div>
      <div class="flex mr-10 mb-10">
        <div class="w-28 flex items-center">
          <div class="font-bold">
            희망지역&nbsp;
          </div>
          <div>*</div>
        </div>
        <input
          type="text"
          placeholder="시/도"
          class="form-input rounded border-gray-300 bg-gray-100 w-[10rem] mr-2"
        >
        <input
          type="name"
          placeholder="구/군"
          class="form-input rounded border-gray-300 bg-gray-100 w-[13rem]"
        >
      </div>
      <div class="flex mr-10 mb-10">
        <div class="w-28 flex items-center">
          <div class="font-bold">
            희망시기&nbsp;
          </div>
          <div>*</div>
        </div>
        <input
          class="mr-1 self-center"
          type="radio"
          value="즉시"
        >
        <label
          for="즉시"
          class="mr-4 self-center"
        >즉시</label>
        <input
          class="mr-1 self-center"
          type="radio"
          value="3개월 내"
        >
        <label
          for="3개월 내"
          class="mr-4 self-center"
        >3개월 내</label>
        <input
          class="mr-1 self-center"
          type="radio"
          value="6개월 내"
        >
        <label
          for="6개월 내"
          class="mr-4 self-center"
        >6개월 내</label>
        <input
          class="mr-1 self-center"
          type="radio"
          value="기타(직접 입력)"
        >
        <label
          for="기타(직접 입력)"
          class="mr-4 self-center"
        >기타(직접 입력)</label>
        <input
          type="text"
          class="form-input rounded disabled:bg-gray-200 border-gray-300 bg-gray-100 w-[20rem]"
        >
      </div>
      <div class="flex mr-10 mb-10">
        <div class="w-28 flex items-center">
          <div class="font-bold">
            희망상권&nbsp;
          </div>
          <div>*</div>
        </div>
        <div>
          <input
            class="form-checkbox mr-1"
            type="checkbox"
            value="유흥"
          >
          <label
            for="유흥"
            class="mr-4"
          >유흥</label>
          <input
            class="form-checkbox mr-1"
            type="checkbox"
            value="오피스"
          >
          <label
            for="오피스"
            class="mr-4"
          >오피스</label>
          <input
            class="form-checkbox mr-1"
            type="checkbox"
            value="학원(학원밀집지, 대학가 등)"
          >
          <label
            for="학원(학원밀집지, 대학가 등)"
            class="mr-4"
          >학원(학원밀집지, 대학가 등)</label>
          <input
            class="form-checkbox mr-1"
            type="checkbox"
            value="주거/아파트"
          >
          <label
            for="주거/아파트"
            class="mr-4"
          >주거/아파트</label>
          <input
            class="form-checkbox mr-1"
            type="checkbox"
            value="쇼핑"
          >
          <label
            for="쇼핑"
            class="mr-4"
          >쇼핑</label>
          <input
            class="form-checkbox mr-1"
            type="checkbox"
            value="기타(직접 입력)"
          >
          <label
            for="기타(직접 입력)"
            class="mr-2"
          >기타(직접 입력)</label>
          <input
            type="text"
            class="form-input rounded disabled:bg-gray-200 border-gray-300 bg-gray-100 w-[20rem]"
          >
        </div>
      </div>
      <div class="flex mr-10 mb-10">
        <div class="w-28 flex items-center">
          <div class="font-bold">
            희망시기&nbsp;
          </div>
          <div>*</div>
        </div>
        <input
          class="mr-1 self-center"
          type="radio"
          value="1.5억 초과"
        >
        <label
          for="1.5억 초과"
          class="mr-4 self-center"
        >1.5억 초과</label>
        <input
          class="mr-1 self-center"
          type="radio"
          value="2.0억 이하"
        >
        <label
          for="2.0억 이하"
          class="mr-4 self-center"
        >2.0억 이하</label>
        <input
          class="mr-1 self-center"
          type="radio"
          value="2.5억 이하"
        >
        <label
          for="2.5억 이하"
          class="mr-4 self-center"
        >2.5억 이하</label>
        <input
          class="mr-1 self-center"
          type="radio"
          value="3.0억 이하"
        >
        <label
          for="3.0억 이하"
          class="mr-4 self-center"
        >3.0억 이하</label>
        <input
          class="mr-1 self-center"
          type="radio"
          value="3.0억 초과"
        >
        <label
          for="3.0억 초과"
          class="mr-4 self-center"
        >3.0억 초과</label>
      </div>
      <hr class="border-black border-1 mb-6">
      <div class="flex flex-col">
        <div class="flex">
          <div class="font-bold">
            문의내용&nbsp;
          </div>
          <div>*</div>
        </div>
        <textarea
          class="h-64 bg-gray-100 border-gray-300 mb-8 mt-2"
          placeholder="내용을 입력해 주세요."
        />
      </div>
      <!-- 개인정보취급방침 -->
    </div>
    <div class="flex justify-center mt-10 mb-16">
      <!-- 신청 시 모달창 띄어서 한번 더 확인하게 -->
      <!-- 필수 항목 미 입력 시 진행 X -->
      <button
        to="/"
        type="button"
        class="flex justify-center items-center text-white bg-somidam border-2 border-somidam focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-bold rounded-full px-6 w-32"
        @click="saveJoin"
      >
        신청하기
      </button>
    </div>
  </div>
</template>
