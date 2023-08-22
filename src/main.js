import "./assets/main.css";
import "primevue/resources/themes/lara-light-indigo/theme.css";
// import VueCoreVideoPlayer from "vue-core-video-player";

import { createApp } from "vue";
import PrimeVue from "primevue/config";
import Card from "primevue/card";
import App from "./App.vue";

const app = createApp(App);
app.use(PrimeVue);
// app.use(VueCoreVideoPlayer);
app.mount("#app");

app.component("Card", Card);
