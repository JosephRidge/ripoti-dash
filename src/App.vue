<script setup> 
import Homepage from './components/home/Homepage.vue'; 
import NavigationVue from './components/navigation/Navigation.vue';
import FooterVue from './components/footer/Footer.vue';
</script>

<template>
  <div class="w-screen h-screen overflow-y-hidden overflow-x-hidden">
  <!-- top navigation -->
  <NavigationVue />
    <!-- body -->
    <router-view></router-view>
    <!-- footer -->
    <FooterVue />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
