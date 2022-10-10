<template>
  <div class="uppercase mt-5 text-2xl text-yellow-500 font-semibold">
    popular movies
    <ItemsComponents />
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
