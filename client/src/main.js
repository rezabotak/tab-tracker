import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { sync } from "vuex-router-sync";
import vuetify from "./plugins/vuetify";
import store from "@/store/store";
import VueYouTubeEmbed from "vue-youtube-embed";
import Panel from "@/components/globals/Panel";

Vue.config.productionTip = false;

Vue.use(VueYouTubeEmbed, { global: true, componentId: "youtube-media" });

Vue.component("Panel", Panel);

sync(store, router);

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount("#app");
