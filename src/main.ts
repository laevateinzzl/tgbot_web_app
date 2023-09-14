import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import * as Sentry from "@sentry/browser";

createApp(App).mount("#app");

Sentry.init({
  dsn: "http://e856cc7b13ec47afa0863a1085904c69@localhost:9002/2",
  release: "test",
});
