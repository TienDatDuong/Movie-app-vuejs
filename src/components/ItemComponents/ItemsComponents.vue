<template>
  <div>
    <router-link to="/movie/1">
      <img
        src="@/assets/image/joker.jpg"
        alt=""
        class="hover:opacity-75 transition ease-in-out duration-150"
      />
    </router-link>

    <h3>2067</h3>
    <div class="flex">
      <svg
        class="fill-current text-yellow-500 w-4 h-4 mt-1"
        viewBox="0 0 24 24"
      >
        <g data-name="Layer 2">
          <path
            d="M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z"
            data-name="star"
          />
        </g>
      </svg>
      <span class="ml-2">47% | 2020-10-01 </span><br />
    </div>
    <span class="text-sm text-gray-500"> Science Fiction, Thriller,Drama </span>
  </div>
</template>

<script>
export default {
  name: "ItemsComponents",
  components: {},
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
