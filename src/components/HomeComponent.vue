<template>
  <div class="mx-auto container">
    <div class="flex justify-between border-b border-gray-500">
      <NavBarComponent />
      <SearchBarComponent />
    </div>
    <PopolarMovies />
  </div>
</template>

<script>
import NavBarComponent from "@/components/header/NavBarComponent.vue";
import SearchBarComponent from "@/components/header/SearchBarComponent.vue";
import PopolarMovies from "@/components/header/PopolarMovies.vue";
export default {
  name: "HomeComponent",
  components: {
    NavBarComponent,
    SearchBarComponent,
    PopolarMovies,
  },
};
</script>

<style></style>
