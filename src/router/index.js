import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SearchVideos from "../views/SearchVideos.vue";
import Videos from "../views/Videos.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/search",
    name: "SearchVideos",
    component: SearchVideos,
  },
  {
    path: "/videos",
    name: "Videos",
    component: Videos,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
