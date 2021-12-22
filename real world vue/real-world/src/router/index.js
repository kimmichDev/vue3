import { createRouter, createWebHistory } from "vue-router";
import MemberList from "../views/MemberList.vue";
import MemberDetail from "../views/MemberDetail.vue";
import About from "../views/About.vue";

const routes = [
  {
    path: "/",
    name: "MemberList",
    component: MemberList,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/member/:id",
    name: "Member",
    props: true,
    component: MemberDetail
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
