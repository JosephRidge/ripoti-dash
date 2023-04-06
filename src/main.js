import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Router library
import { createRouter, createWebHistory } from "vue-router";

// Firebase Init
import { initializeApp } from "firebase/app";
// Pinia
import { createPinia } from "pinia";
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
    measurementId: "G-77T4CVYNKX"
  };
  initializeApp(firebaseConfig)
createApp(App).mount('#app')
