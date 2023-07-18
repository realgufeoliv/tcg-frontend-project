import { boot } from "quasar/wrappers";
import VueChartkick from "vue-chartkick";
import "chartkick/chart.js";

export default boot(({ app }) => {
  // Set vue-chartkick instance on app
  app.use(VueChartkick);
});
