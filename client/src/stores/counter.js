import { defineStore } from "pinia";
import axios from "../../axios/axios";
import router from "../router";
import swal from "sweetalert2";
const baseURL = 'http://localhost:3000/'

export const useCounterStore = defineStore({
    id: "counter",
    state: () => ({
      threads: [],
      isLogin: true,
      mangas: [],
      comment: "",
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
              swal.fire({
                title: "Success",
                text: "Signup Success",
                icon: "success",
                showConfirmButton: false,
                timer: 1500
              })
              router.push("/signin")
            } catch (error) {
              swal.fire({
                title: "Error",
                text: "Email must be unique",
                icon: "error",
                confirmButtonText: "OK",
              })
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
              swal.fire({
                title: "Success",
                text: "Signin Success",
                icon: "success",
                showConfirmButton: false,
                timer: 1500
              })
            } catch (error) {
              swal.fire({
                title: "Error",
                text: "Invalid email/password",
                icon: "error",
                confirmButtonText: "OK",
              })
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
          try {
            const { data } = await axios({
              method: "get",
              url: "/manga/manga",
            })
            this.mangas = data;
          } catch (error) {
              console.log(error)
          }
        },

        async getDetailThread(id) {
          try {
            const { data } = await axios({
              method: "get",
              url: `/thread/${id}`,
            })
            this.threads = data;
          } catch (error) {
              console.log(error)
          }
        },

        async addComment(params, comment) {
          try {
            const { data } = await axios({
              method: "post",
              url: `/comments/${params.id}`,
              headers: {
                "access_token": localStorage.getItem("access_token")
              },
              data: {
                comment: comment
              }
            })
            swal.fire({
              title: "Success",
              text: "Comment Success",
              icon: "success",
              showConfirmButton: false,
              timer: 1500
            })
            this.comment = data.commentData.comment
          } catch (error) {
            swal.fire({
              title: "Error",
              text: "Comment Failed",
              icon: "error",
              confirmButtonText: "OK",
            })
          }
        },

        addThread(threadData) {
          return axios({
            method: "post",
            url: "/thread/add",
            headers: {
              "access_token": localStorage.getItem("access_token")
            },
            data: {
              title: threadData.title,
              content: threadData.content,
              imgUrl: threadData.imgUrl,
            }
          })
        }

        
    },
});
