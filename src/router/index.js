import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/add",
    name: "add",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/add.vue"),
  },
  {
    path: "/update/:id",
    name: "update",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Update.vue"),
  },
  {
    path: "/:id",
    name: "book-detail",
    component: () => import("../views/BookDetail.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
