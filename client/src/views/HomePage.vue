<template>
    <NavBar />

    <section class="px-8 pt-8 w-full">
        <div class="grid grid-cols-2 gap-2.5 md:grid-cols-2 lg:grid-cols-4">
            <div class="bg-white rounded-md p-7 shadow-xl xl:col-span-2">
                <div class="flex">
                    <div
                        class="p-2 bg-center bg-cover w-16 rounded-xl h-16 flex-shrink-0"
                        style="background-image: url(https://www.theanimedaily.com/wp-content/uploads/2022/02/manga-series-1280x720-1.png)"
                    ></div>
                    <div class="w-full ml-2.5"><span class="block font-bold">Thread Title</span><span class="block text-sm text-gray-400"></span></div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M13 10C13 11.1046 13.8954 12 15 12C16.1046 12 17 11.1046 17 10V5C17 3.89543 16.1046 3 15 3C13.8954 3 13 3.89543 13 5V10ZM5 8C3.89543 8 3 8.89543 3 10C3 11.1046 3.89543 12 5 12H10C11.1046 12 12 11.1046 12 10C12 8.89543 11.1046 8 10 8H5ZM15 13C13.8954 13 13 13.8954 13 15C13 16.1046 13.8954 17 15 17H20C21.1046 17 22 16.1046 22 15C22 13.8954 21.1046 13 20 13H15ZM10 22C8.89543 22 8 21.1046 8 20L8 15C8 13.8954 8.89543 13 10 13C11.1046 13 12 13.8954 12 15V20C12 21.1046 11.1046 22 10 22ZM8 5C8 3.89543 8.89543 3 10 3C11.1046 3 12 3.89543 12 5V7H10C8.89543 7 8 6.10457 8 5ZM3 15C3 16.1046 3.89543 17 5 17C6.10457 17 7 16.1046 7 15V13H5C3.89543 13 3 13.8954 3 15ZM17 20C17 21.1046 16.1046 22 15 22C13.8954 22 13 21.1046 13 20V18H15C16.1046 18 17 18.8954 17 20ZM22 10C22 8.89543 21.1046 8 20 8C18.8954 8 18 8.89543 18 10V12H20C21.1046 12 22 11.1046 22 10Z"
                            fill="currentColor"
                        ></path>
                    </svg>
                </div>
                <span class="block mt-3 text-gray-600">Ini adalah deskripsi dari forum</span>
            </div>
            <div class="p-2 xl:col-span-2">
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th class="px-6 py-3 text-green-600" scope="col">Manga Title</th>
                                <th class="px-6 py-3 text-green-600" scope="col">IMAGE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap" scope="row">Ini adalah judul manga</th>
                                <td
                                    class="p-2 bg-center bg-cover w-10 mr-3 rounded-xl h-16 flex-shrink-0"
                                    style="background-image: url(https://www.theanimedaily.com/wp-content/uploads/2022/02/manga-series-1280x720-1.png)"
                                >
                                    Sliver
                                </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"></tr>
                            <tr class="bg-white dark:bg-gray-800"></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import NavBar from "../components/NavBar.vue";

export default {
    components: {
        NavBar,
    },
};
</script>

<style></style>
