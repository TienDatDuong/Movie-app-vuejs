<template>
  <div class="my-5 flex relative">
    <input
      type="text"
      class="rounded-full bg-gray-600 pl-8 pr-5 w-100 h-10 focus:outline-none focus:outline-shawod"
      placeholder="Search..."
    />
    <div class="absolute top-0">
      <img
        src="@/assets/image/icon-search.png"
        alt=""
        class="fill-current w-8 text-gray-500 mt-3 ml-2 pr-4"
      />
    </div>
    <div v-if="false" class="absolute mt-12 ml-2 rounded bg-gray-500 w-56">
      <ul class="mt-3">
        <li class="flex p-1 items-center border-b border-gray-300 pb-1">
          <img src="@/assets/image/joker.jpg" alt="" class="w-10" />
          <span>Die Hard</span>
        </li>
        <li class="flex p-1 items-center border-b border-gray-300 pb-1">
          <img src="@/assets/image/joker.jpg" alt="" class="w-10" />
          <span>Die Hard</span>
        </li>
        <li class="flex p-1 items-center border-b border-gray-300 pb-1">
          <img src="@/assets/image/joker.jpg" alt="" class="w-10" />
          <span>Die Hard</span>
        </li>
      </ul>
    </div>
    <img
      src="@/assets/image/avatar_n.png"
      alt=""
      class="w-10 mx-5 rounded-full"
    />
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
