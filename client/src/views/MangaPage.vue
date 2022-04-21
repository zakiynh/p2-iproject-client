<template>
    <NavBar />
    <div class="pt-12">
        <div class="overflow-x-auto shadow-md sm:rounded-lg 2 mx-4 mt-8">
            <ReuseTable v-for="manga in mangas" :key="manga.id" :manga="manga" />
        </div>
    </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import ReuseTable from "../components/ReuseTable.vue";
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
    components: {
        NavBar,
        ReuseTable,
    },
    methods: {
        ...mapActions(useCounterStore, ["getThreads", "getManga"]),
    },
    computed: {
        ...mapState(useCounterStore, ["threads", "mangas"]),
    },
    mounted() {
        this.getThreads();
        this.getManga();
    },
};
</script>

<style></style>
