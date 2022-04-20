<template>
    <NavBar />
    <div class="bg-white rounded-md p-7 shadow-xl xl:col-span-2 mx-4 mt-8">
        <ReuseCard />
    </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import ReuseCard from "../components/ReuseCard.vue";

export default {
    components: {
        NavBar,
        ReuseCard
    },
};
</script>

<style></style>
