import { defineStore } from "pinia";
import axios from "../../axios/axios";
import router from "../router";

export const useCounterStore = defineStore({
    id: "counter",
    state: () => ({}),
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
                  password
                }
              })
              localStorage.setItem("access_token", data.userData.access_token);
              localStorage.setItem("email", data.userData.email);
              router.push("/");
            } catch (error) {
                console.log(error);
            }
        },
    },
});
