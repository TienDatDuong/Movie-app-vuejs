ItemsComponents
<template>
  <div class="px-5">
    <h2 class="uppercase mt-5 text-2xl text-yellow-500 font-semibold">
      popular movies
    </h2>
    <div
      class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8"
    >
      <ItemsComponents />
      <ItemsComponents />
      <ItemsComponents />
      <ItemsComponents />
    </div>
  </div>
</template>

<script>
import ItemsComponents from "@/components/ItemComponents/ItemsComponents.vue";

export default {
  components: {
    ItemsComponents,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
