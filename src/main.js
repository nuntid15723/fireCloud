import Vue from "vue";
import App from "./App.vue";
import firebase from "firebase/app";
import "firebase/firestore";

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
    const firebaseConfig = {
      apiKey: "AIzaSyB8XVdooERaMErkIZpI-PefpOxz_oGKkFA",
      authDomain: "cs313-db-cebb6.firebaseapp.com",
      projectId: "cs313-db-cebb6",
      storageBucket: "cs313-db-cebb6.appspot.com",
      messagingSenderId: "103875759397",
      appId: "1:103875759397:web:8a4a1d9af358059a289ecc",
      measurementId: "G-GS4R767NGY"
    
    };
    firebase.initializeApp(firebaseConfig);
}
export const db = firebase.firestore()

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount("#app");