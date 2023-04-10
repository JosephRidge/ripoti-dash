<template>
  <div class="h-screen w-screen">
    <NavigationVue :location="true" :summary="false" :prediction="false" :reports="false" />
    <MapsVue />
  </div>
</template>

<script>
import MapsVue from "../maps/Maps.vue";
import NavigationVue from "../navigation/Navigation.vue";
export default {
  components: {
    MapsVue,
    NavigationVue,
  },
};
</script>

<style></style>
