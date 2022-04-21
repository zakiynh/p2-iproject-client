import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import './index.css'

const app = createApp(App);
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

app.use(createPinia());
app.use(router);
app.use(VueSweetalert2);

app.mount("#app");
