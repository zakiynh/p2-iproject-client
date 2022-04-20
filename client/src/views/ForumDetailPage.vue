<template>
    <NavBar />
    <div class="pt-20 p-7 w-full">
        <div class="grid grid-cols gap-2.5 md:grid-cols lg:grid-cols">
            <div class="bg-white rounded-md p-7 shadow-xl xl:col-span-2">
                <!-- CARD -->
                <div class="flex">
                    <div class="bg-center block bg-cover w-36 rounded-xl h-16 flex-shrink-0">
                        <img :src="threads.imgUrl" />
                    </div>
                    <div class="w-full ml-2.5">
                        <span class="block font-bold">{{ threads.title }}</span> <span class="block text-sm text-gray-400"></span>
                    </div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M13 10C13 11.1046 13.8954 12 15 12C16.1046 12 17 11.1046 17 10V5C17 3.89543 16.1046 3 15 3C13.8954 3 13 3.89543 13 5V10ZM5 8C3.89543 8 3 8.89543 3 10C3 11.1046 3.89543 12 5 12H10C11.1046 12 12 11.1046 12 10C12 8.89543 11.1046 8 10 8H5ZM15 13C13.8954 13 13 13.8954 13 15C13 16.1046 13.8954 17 15 17H20C21.1046 17 22 16.1046 22 15C22 13.8954 21.1046 13 20 13H15ZM10 22C8.89543 22 8 21.1046 8 20L8 15C8 13.8954 8.89543 13 10 13C11.1046 13 12 13.8954 12 15V20C12 21.1046 11.1046 22 10 22ZM8 5C8 3.89543 8.89543 3 10 3C11.1046 3 12 3.89543 12 5V7H10C8.89543 7 8 6.10457 8 5ZM3 15C3 16.1046 3.89543 17 5 17C6.10457 17 7 16.1046 7 15V13H5C3.89543 13 3 13.8954 3 15ZM17 20C17 21.1046 16.1046 22 15 22C13.8954 22 13 21.1046 13 20V18H15C16.1046 18 17 18.8954 17 20ZM22 10C22 8.89543 21.1046 8 20 8C18.8954 8 18 8.89543 18 10V12H20C21.1046 12 22 11.1046 22 10Z"
                            fill="currentColor"
                        ></path>
                    </svg>
                </div>
                <span class="block mt-8 text-gray-600">{{ threads.content }}</span>

                <section class="w-full">
                    <div class="grid grid-cols-1">
                        <div class="max-w-6xl mx-auto w-full bg-white p-2">

                            <form @submit.prevent="addCommentThread">
                                <div class="p-2 w-full">
                                    <div class="flex items-center">
                                        <label>Comment Here</label><label class="text-red-500 ml-1">*</label
                                        ><svg
                                            class="w-3.5 h-3.5 ml-1 text-gray-500"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M11 10.9794C11 10.4271 11.4477 9.97937 12 9.97937C12.5523 9.97937 13 10.4271 13 10.9794V16.9794C13 17.5317 12.5523 17.9794 12 17.9794C11.4477 17.9794 11 17.5317 11 16.9794V10.9794Z"
                                                fill="currentColor"
                                            ></path>

                                            <path
                                                d="M12 6.05115C11.4477 6.05115 11 6.49886 11 7.05115C11 7.60343 11.4477 8.05115 12 8.05115C12.5523 8.05115 13 7.60343 13 7.05115C13 6.49886 12.5523 6.05115 12 6.05115Z"
                                                fill="currentColor"
                                            ></path>
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                    </div>
                                    <textarea
                                        v-model="threads.comment"
                                        class="w-full rounded p-2 bg-gray-100 mt-1 outline-none"
                                        placeholder="Type your comment here"
                                    ></textarea>
                                </div>
                                <div class="p-2 w-full mt-2.5">
                                    <button
                                        type="submit"
                                        class="shadow-sm text-white rounded-md hover:bg-blue-500 flex items-center px-5 py-2 transition-colors duration-150 bg-blue-600"
                                    >
                                        <span class="text-sm">Add Comment</span>
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </section>
                <div class="rounded-lg w-full bg-white"></div>
                <section class="w-full">
                    <div class="rounded-lg w-full bg-white"></div>
                </section>
                <CommentBar />
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";
import NavBar from "../components/NavBar.vue";
import CommentBar from "../components/CommentBar.vue";

export default {
    components: {
        NavBar,
        CommentBar,
    },
    data() {
        return {
            threads: {
                comment: "",
            },
        };
    },
    methods: {
        ...mapActions(useCounterStore, ["getDetailThread", "addComment", "getThreads"]),
        addCommentThread() {
            this.addComment(this.$route.params, this.threads.comment);
            this.getThreads();
        },
    },
    computed: {
        ...mapState(useCounterStore, ["threads", "threadId", "comment"]),
        
    },
    mounted() {},
};
</script>

<style></style>
