import { createRouter, createWebHashHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";

const routes = [
  {
    path: "/",
    component: HomeComponent,
  },
];
const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});
export default router;
