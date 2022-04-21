import { createRouter, createWebHistory } from "vue-router";
import SigninPage from "../views/SigninPage.vue";
import SignupPage from "../views/SignupPage.vue";
import HomePage from "../views/HomePage.vue";
import ForumPage from "../views/ForumPage.vue";
import MangaPage from "../views/MangaPage.vue";
import AddPage from "../components/AddThread.vue";
import ForumDetailPage from "../views/ForumDetailPage.vue";

const routes = [
    { path: "/", name: "HomePage", component: HomePage},
    { path: "/signin", name: "SigninPage", component: SigninPage},
    { path: "/signup", name: "SignupPage", component: SignupPage},
    { path: "/forum", name: "ForumPage", component: ForumPage},
    { path: "/manga", name: "MangaPage", component: MangaPage},
    { path: "/addThread", name: "AddPage", component: AddPage},
    { path: "/detail/:id(\\d+)", name: "DetailPage", component: ForumDetailPage},
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('access_token')
  if (to.name === "SignupPage" && isAuthenticated) next({ name: "HomePage"})
  else if (to.name === "SigninPage" && isAuthenticated) next({ name: "HomePage"})
  else if (to.name === "AddPage" && !isAuthenticated) next({ name: "HomePage"})
  else next()
})

export default router;
