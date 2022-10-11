<template>
  <div class="bg-gray-800 text-white min-h-screen">
    <div class="flex justify-between border-b border-gray-500">
      <NavBarComponent />
      <SearchBarComponent />
    </div>
    <router-view />
  </div>
</template>

<script>
import NavBarComponent from "@/components/header/NavBarComponent.vue";
import SearchBarComponent from "@/components/header/SearchBarComponent.vue";

export default {
  name: "App",
  components: {
    NavBarComponent,
    SearchBarComponent,
  },
};
</script>

<style></style>
