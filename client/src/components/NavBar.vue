<template>
    <section class="w-full">
        <div class="w-full bg-white">
            <div class="flex  border-t py-0 px-4"><span class="font-bold mt-3 text-lg">Manga-Nih</span>
                <div class="flex ml-3">
                    <router-link to="/"
                            class="flex items-center py-2 transition-colors duration-150 text-gray-700 hover:text-blue-600 border-b-4 border-transparent hover:border-blue-500"><span
                                class="text-sm">Home</span>
                    </router-link>
                    <router-link to="/forum"
                        class="flex items-center py-2 transition-colors duration-150 text-gray-700 hover:text-blue-600 border-b-4 border-transparent hover:border-blue-500 ml-5"><span
                            class="text-sm">Forum</span></router-link>
                    <router-link to="/manga"
                        class="flex items-center py-2 transition-colors duration-150 text-gray-700 hover:text-blue-600 border-b-4 border-transparent hover:border-blue-500 ml-5"><span
                            class="text-sm">Manga List</span></router-link>
                </div>
                <div class="p-2 ml-auto flex-shrink-0 flex">
                    
                        <button
                        @click.prevent="doSignOut"
                        class="flex items-center py-2 transition-colors duration-150 text-red-700 hover:text-red-600 border-b-4 border-transparent hover:border-red-500 ml-5"><span
                            class="text-sm">Logout</span></button>
                </div>
            </div>
        </div>
        <section class="w-full">
            <div class="rounded-lg w-full bg-white"></div>
        </section>
    </section>
</template>

<script>
import { useCounterStore } from "@/stores/counter";
import { mapStores } from "pinia";
export default {
    name: "NavBar",
    computed: {
        ...mapStores(useCounterStore)
    },
    methods: {
        doSignOut() {
            localStorage.clear()
            this.$router.push("/")
        }
    },
}
</script>

<style>
</style>