import { defineStore } from "pinia";
import axios from "../../axios/axios";
import router from "../router";
const baseURL = 'http://localhost:3000/'

export const useCounterStore = defineStore({
    id: "counter",
    state: () => ({
      threads: [],
      isLogin: true,
      mangas: [],
    }),
    getters: {},
    actions: {
        async submitSignup(username, email, password) {
            try {
              await axios({
                method: "post",
                url: "/signup",
                data: {
                  username,
                  email,
                  password,
                }
              })
              router.push("/signin")
            } catch (error) {
                console.log(error)
            }
        },

        async submitSignin(email, password) {
            try {
              const { data } = await axios({
                method: "post",
                url: "/signin",
                data: {
                  email,
                  password,
                }
              })
              localStorage.setItem("access_token", data.userData.access_token);
              localStorage.setItem("email", data.userData.email);
              router.push("/");
            } catch (error) {
                console.log(error);
            }
        },

        async getThreads() {
          try {
            const { data } = await axios({
              method: "get",
              url: "/thread",
            })
            this.threads = data;
          } catch (error) {
              console.log(error)
          }
        },

        async getManga() {
          console.log("masukkk");
          try {
            const { data } = await axios({
              method: "get",
              url: "/manga/manga",
            })
            console.log(data, "<<<<MASUKDATA");
            this.mangas = data;
          } catch (error) {
              console.log(error)
          }
        }
    },
});
