<template>
  <div>
    <div class="container mx-auto flex mt-20 border-b border-gray-500 pb-3">
      <img src="@/assets/image/joker.jpg" alt="" class="w-64" />
      <div class="ml-5">
        <h2 class="text-4xl font-semibold">Joker</h2>
        <span class="flex text-gray-400 text-sm">
          <svg
            class="fill-current text-yellow-500 w-4 h-4 mt-1 mr-1"
            viewBox="0 0 24 24"
          >
            <g data-name="Layer 2">
              <path
                d="M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z"
                data-name="star"
              />
            </g>
          </svg>
          82% | 2019-10-02 Crime , Thriller,Drama
        </span>

        <p>
          Gã Hề Joker 2019 Full HD Vietsub Thuyết Minh JOKER từ lâu đã là siêu
          ác nhân huyền thoại của điện ảnh thế giới. Nhưng có bao giờ bạn tự
          hỏi, Joker đến từ đâu và điều gì đã biến Joker trở thành biểu tượng
          tội lỗi
        </p>
        <div class="mt-5">
          <span class="mt-5 font-semibold">Featured Cast</span>
          <div class="flex">
            <div class="flex flex-col mt-5 mr-5">
              <span>Scott Silver</span>
              <span class="text-gray-500">Writer</span>
            </div>
            <div class="flex flex-col mt-5">
              <span>Bruce Berman</span>
              <span class="text-gray-500">Executive Producer</span>
            </div>
          </div>
        </div>
        <div class="mt-5">
          <a
            href="#"
            class="bg-yellow-500 rounded px-5 py-3 text-black inline-flex"
          >
            <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
              />
            </svg>

            <span class="ml-3">Play Trailer</span></a
          >
          <!-- //Favourite -->
          <a
            href="#"
            class="bg-yellow-500 rounded px-5 py-3 text-black inline-flex ml-5"
          >
            <img src="@/assets/image/heart-white.png" alt="" />

            <span class="ml-3">Favourite</span></a
          >
        </div>
      </div>
    </div>
    <CardComponent />
    <ImageComponent />
  </div>
</template>

<script>
import CardComponent from "@/movies/CardComponent.vue";
import ImageComponent from "@/movies/ImageComponent.vue";
export default {
  components: {
    CardComponent,
    ImageComponent,
  },
};
</script>

<style></style>
