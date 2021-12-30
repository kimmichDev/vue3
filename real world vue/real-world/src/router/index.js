import { createRouter, createWebHistory } from "vue-router";
import MemberList from "../views/MemberList.vue";
import Layout from "../views/event/Layout.vue";
import Detail from "../views/event/Detail.vue";
import Register from "../views/event/Register.vue";
import Edit from "../views/event/Edit.vue";
import About from "../views/About.vue";

const routes = [
  {
    path: "/",
    name: "MemberList",
    component: MemberList,
    props: (route) => ({ page: route.query.page || 1 })
  },
  {
    path: "/about",
    name: "About",
    component: About,
    alias: "/about-us"
  },
  {
    path: "/member/:id",
    name: "Layout",
    props: true,
    component: Layout,
    children: [
      {
        path: "",
        component: Detail,
        name: "MemberDetail"
      },
      {
        path: "register",
        component: Register,
        name: "MemberRegister"
      },
      {
        path: "edit",
        component: Edit,
        name: "MemberEdit"
      }
    ]
  },
  {
    path: "/members/:afterMember(.*)",
    redirect: (to) => {
      // return console.log(to);
      return { path: "/member/" + to.params.afterMember }
    }
  },
  {
    path: "/about-our",
    redirect: { name: "About" },
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
