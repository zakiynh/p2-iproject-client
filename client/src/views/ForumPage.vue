<template>
    <NavBar />
    <div class="bg-white rounded-md p-7 shadow-xl xl:col-span-2 mx-4 mt-8">
        <ReuseCard 
        v-for="thread in threads"
        :key="thread.id"
        :thread="thread" />
    </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import NavBar from "../components/NavBar.vue";
import ReuseCard from "../components/ReuseCard.vue";
import { useCounterStore } from "../stores/counter";

export default {
    components: {
        NavBar,
        ReuseCard
    },
    methods: {
        ...mapActions(useCounterStore, ["getThreads"]),
    },
    computed: {
        ...mapState(useCounterStore, ["threads"]),
    },
    mounted() {
        this.getThreads()
    }
};
</script>

<style></style>
