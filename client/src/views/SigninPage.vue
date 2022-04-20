<template>
    <main class="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
        <!-- component -->
        <div class="card-body">
            <section class="flex flex-col w-screen justify-center items-center space-y-10 bg-gray-900 text-white">
                <form action="" class="flex w-96 flex-col space-y-10 bg-gray-900 text-white">
                    <div class="text-center text-4xl font-medium text-green-500">Log In</div>

                    <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
                        <input
                            v-model="email"
                            type="text"
                            placeholder="Email"
                            class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                        />
                    </div>

                    <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
                        <input
                            v-model="password"
                            type="password"
                            placeholder="Password"
                            class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                        />
                    </div>

                    <button @click.prevent="doSignIn" class="transform rounded-md bg-green-600 py-2 font-bold duration-300 hover:bg-green-400">LOG IN</button>

                    <p class="text-center text-lg text-green-500">OR</p>

                    <div class="items-center justify-center mx-auto">
                        <button
                            type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            class="inline-block px-6 py-2.5 mb-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
                            style="background-color: #ea4335"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" class="w-4 h-4">
                                <path
                                    fill="currentColor"
                                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                                />
                            </svg>
                        </button>
                    </div>

                    <p class="text-center text-lg text-green-500">
                        No account?
                        <router-link to="/signup" href="" class="font-medium text-green-500 cursor-pointer underline-offset-4 hover:underline"
                            >Create One</router-link>
                    </p>
                </form>
            </section>
        </div>
    </main>
</template>

<script>
import { useCounterStore } from "@/stores/counter";
import { mapStores } from "pinia";

export default {
    data() {
        return {
            email: "",
            password: ""
        };
    },
    computed: {
        ...mapStores(useCounterStore)
    },
    methods: {
        doSignIn() {
            this.counterStore.submitSignin(this.email, this.password);
        }
    },
}
</script>

<style></style>
