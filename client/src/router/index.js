import { createRouter, createWebHistory } from "vue-router";
import SigninPage from "../views/SigninPage.vue";
import SignupPage from "../views/SignupPage.vue";
import HomePage from "../views/HomePage.vue";

const routes = [
    { path: "/", name: "HomePage", component: HomePage},
    { path: "/signin", name: "SigninPage", component: SigninPage},
    { path: "/signup", name: "SignupPage", component: SignupPage},
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
