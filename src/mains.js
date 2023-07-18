import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Quasar } from "quasar";
import quasarUserOptions from "./quasar-user-options";

import Particles from "particles.vue3";

createApp(App)
  .use(store)
  .use(Particles)
  .use(Quasar, quasarUserOptions)
  .use(router)
  .mount("#app");
