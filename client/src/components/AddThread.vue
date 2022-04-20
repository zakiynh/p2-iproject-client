<template>
<NavBar />
    <div class="mx-auto flex min-h-screen pt-20 w-full items-center justify-center">
        <form
            @submit.prevent="submitThread"
            class="space-y-6 p-4 w-96 rounded-lg border shadow-md sm:p-6 lg:p-8"
            action="#"
        >
            <h5 class="text-xl font-medium dark:text-white text-center">Add Thread</h5>
            <div>
                <label for="email" class="block mb-2 text-sm font-medium dark:text-gray-300">Title Thread</label>
                <input
                    type="text"
                    class="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 "
                    v-model="title"
                />
            </div>
            <div>
                <label for="password" class="block mb-2 text-sm font-medium dark:text-gray-300">Content</label>
                <textarea
                    type="text"
                    class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 "
                    v-model="content"
                />
            </div>
            <div>
                <label for="email" class="block mb-2 text-sm font-medium dark:text-gray-300">Image</label>
                <input
                    type="text"
                    class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 "
                    v-model="imgUrl"
                />
            </div>
            <div class="flex items-start">
                <div class="flex items-start"></div>
            </div>
            <button
                type="submit"
                class="w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
                Submit
            </button>
        </form>
    </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";
export default {
    components: {
        NavBar,
    },
    data() {
        return {
            title: "",
            content: "",
            imgUrl: "",
        };
    },
    methods: {
        ...mapActions(useCounterStore, ["addThread"]),
        async submitThread() {
            await this.addThread({
                title: this.title,
                content: this.content,
                imgUrl: this.imgUrl,
            });
            this.$router.push("/");
        }
    }
};
</script>

<style></style>
