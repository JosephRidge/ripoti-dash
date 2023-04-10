<template>
<div class="h-screen">
    <Navigation  :location="false" :summary="true" :prediction="false" :reports="false" />
    <div class="text-2xl py-2 font-bold text-center my-4">Coming soon!</div>
    <div>
      <img
        src="./assets/images/comingsoon.svg"
        class="w-1/3 mx-auto"
        alt="coming soon"
        srcset=""
      />
    </div>

</div>
</template>

<script>
import Navigation from '../navigation/Navigation.vue';
export default {
    components:{
        Navigation
    }
};
</script>

<style></style>
