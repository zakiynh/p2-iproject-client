<template>
    <NavBar />
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg 2 mx-4 mt-8">
        <ReuseTable />
    </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import ReuseTable from "../components/ReuseTable.vue";

export default {
    components: {
        NavBar,
        ReuseTable
    },
};
</script>

<style>

</style>