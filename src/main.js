import Vue from "vue";
import App from "./App.vue";
import router from "./router/router.js";
// import VueAxios from "vue-axios";
import VueLazyLoad from "vue-lazyload";
// import VueCookie from "vue-cookie";
import { Message } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import store from "./store/index.js";
// import axios from "axios";

//mock开关
// const mock = false;
// if (mock) {
//   require("./mock/api");
// }

// Vue.use(VueAxios, axios);
// Vue.use(VueCookie);
Vue.use(VueLazyLoad, {
  loading: "/imgs/loading-svg/loading-bars.svg",
});
Vue.prototype.$message = Message;
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
