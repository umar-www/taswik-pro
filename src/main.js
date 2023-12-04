import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { MotionPlugin } from "@vueuse/motion";
import "./assets/style.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS fayli

const app = createApp(App);

app.use(router);
app.use(MotionPlugin);

app.mount("#app");
