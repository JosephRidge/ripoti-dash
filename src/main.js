import { createApp } from "vue";
import "./assets/style/index.css";
import App from "./App.vue";

// Router library
import { createRouter, createWebHistory } from "vue-router";

// Firebase Init
import { initializeApp } from "firebase/app";
// Pinia
import { createPinia } from "pinia";

// importing the routes
import Home from "./components/home/Homepage.vue";
import Maps from "./components/maps/Maps.vue";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuXZdQiC41s_03udfMO02c9LQziEkPzzc",
  authDomain: "ripoti-97777.firebaseapp.com",
  databaseURL: "https://ripoti-97777-default-rtdb.firebaseio.com",
  projectId: "ripoti-97777",
  storageBucket: "ripoti-97777.appspot.com",
  messagingSenderId: "651690260634",
  appId: "1:651690260634:web:4f9975b5c25e211e19c723",
  measurementId: "G-77T4CVYNKX",
};

// Initialize Firebase
initializeApp(firebaseConfig);

// pinia instance
const pinia = createPinia();

// create the routes
const routes = [
  // home
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/locations",
    name: "Locations",
    component: Map,
  },
];
// create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(pinia).use(router).mount("#app");
