import Vue from "vue";
import VueRouter from "vue-router";
import Modal from "@/views/Modal.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Modal",
    component: Modal
  },
  {
    path: "/list",
    name: "List",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "@/views/List.vue")
  },
  {
    path: "/drawer",
    name: "Drawer",
    component: () =>
      import(/* webpackChunkName: "drawer" */ "@/views/Drawer.vue")
  },
  {
    path: "/cards",
    name: "Cards",
    component: () => import(/* webpackChunkName: "cards" */ "@/views/Cards.vue")
  },
  {
    path: "/simple",
    name: "Simple",
    component: () =>
      import(/* webpackChunkName: "simple" */ "@/views/Simple.vue")
  },
  {
    path: "/stagger",
    name: "Stagger",
    component: () =>
      import(/* webpackChunkName: "stagger" */ "@/views/Stagger.vue")
  },
  {
    path: "/state",
    name: "State",
    component: () => import(/* webpackChunkName: "state" */ "@/views/State.vue")
  },
  {
    path: "/timeline",
    name: "Timeline",
    component: () =>
      import(/* webpackChunkName: "state" */ "@/views/Timeline.vue")
  {
    path: "/master",
    name: "Master",
    component: () =>
      import(/* webpackChunkName: "Master" */ "@/views/Master.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
