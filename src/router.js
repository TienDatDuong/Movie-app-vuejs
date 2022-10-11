import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./views/HomeComponent.vue";
import MovieComponent from "./movies/MovieComponent.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeComponent,
  },
  {
    path: "/movie/:id",
    name: "movie",
    component: MovieComponent,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
