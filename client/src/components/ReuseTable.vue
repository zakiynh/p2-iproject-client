<template>
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th class="px-6 py-3 text-green-600" scope="col">Manga Title</th>
                <th class="px-6 py-3 text-green-600" scope="col">IMAGE</th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white  border-b dark:bg-gray-800 dark:border-gray-700">
                <th class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap" scope="row">{{manga.attributes.canonicalTitle}}</th>
                <td
                    
                    class="p-2 bg-center bg-cover w-10 mr-3 rounded-xl h-16 flex-shrink-0"
                    
                >
                    <img :src="manga.attributes.posterImage.small"/>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"></tr>
            <tr class="bg-white dark:bg-gray-800"></tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name: "ReuseTable",
    props: ["manga"]
}
</script>

<style></style>
