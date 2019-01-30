import Vue from "vue";
import firebase from "firebase";
import App from "./App.vue";
import router from "./router";
import Buefy from "buefy";
import "buefy/dist/buefy.css";

require("@/assets/css/instaAlbum.css");

Vue.use(Buefy);
Vue.config.productionTip = false;

var config = {
  apiKey: "AIzaSyAB_yBu6uCOLAD3ci1Cf-5H6sh_nuGbMBo",
  authDomain: "sarah-and-rob.firebaseapp.com",
  databaseURL: "https://sarah-and-rob.firebaseio.com",
  projectId: "sarah-and-rob",
  storageBucket: "sarah-and-rob.appspot.com",
  messagingSenderId: "793325439550"
};
firebase.initializeApp(config);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
