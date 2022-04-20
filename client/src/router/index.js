import { createRouter, createWebHistory } from "vue-router";
import SigninPage from "../views/SigninPage.vue";
import SignupPage from "../views/SignupPage.vue";
import HomePage from "../views/HomePage.vue";
import ForumPage from "../views/ForumPage.vue";
import MangaPage from "../views/MangaPage.vue";

const routes = [
    { path: "/", name: "HomePage", component: HomePage},
    { path: "/signin", name: "SigninPage", component: SigninPage},
    { path: "/signup", name: "SignupPage", component: SignupPage},
    { path: "/forum", name: "ForumPage", component: ForumPage},
    { path: "/manga", name: "MangaPage", component: MangaPage},
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
