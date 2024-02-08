import { createApp } from "vue";
import App from "./App.vue";
import Toast from "vue-toastification";

import "./assets/style.css";
import "vue-toastification/dist/index.css";

const app = createApp(App);
app.use(Toast);
app.mount("#app");
