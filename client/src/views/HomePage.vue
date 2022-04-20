<template>
    <NavBar />

    <section class="px-8 pt-8 w-full">
        <div class="grid grid-cols-2 gap-2.5 md:grid-cols-2 lg:grid-cols-4">
            <div class="bg-white rounded-md p-7 shadow-xl xl:col-span-2">
                <!-- CARD -->
            <ReuseCard 
            v-for="thread in threads"
            :key="thread.id"
            :thread="thread"
            />

            </div>


            <div class="p-2 xl:col-span-2">
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <!-- TABLE -->
                    <ReuseTable />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapActions, mapState } from "pinia";
import NavBar from "../components/NavBar.vue";
import ReuseCard from "../components/ReuseCard.vue";
import ReuseTable from "../components/ReuseTable.vue";
import { useCounterStore } from "../stores/counter";

export default {
    components: {
        NavBar,
        ReuseCard,
        ReuseTable,
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
