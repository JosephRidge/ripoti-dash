<template>
  <div class="flex justify-end gap-6 bg-blue-800 px-10">
    <!-- map -->
    <router-link
      to="/"
      :class="
        location == true
          ? 'text-base font-bold py-4 text-amber-300 underline underline-offset-4 transition ease-in-out duration-500 hover:cursor-pointer'
          : 'text-base font-bold py-4 text-white hover:text-amber-300 transition ease-in-out duration-500 hover:cursor-pointer'
      "
      >locations</router-link
    >
    <!-- summary -->
    <router-link
      to="/summary"
      :class="
        summary == true
          ? 'text-base font-bold py-4 text-amber-300 underline underline-offset-4 transition ease-in-out duration-500 hover:cursor-pointer'
          : 'text-base font-bold py-4 text-white hover:text-amber-300 transition ease-in-out duration-500 hover:cursor-pointer'
      "
      >summary</router-link
    >
    <!-- predictions -->
    <router-link
      to="/predictions"
      :class="
        prediction == true
          ? 'text-base font-bold py-4 text-amber-300 underline underline-offset-4 transition ease-in-out duration-500 hover:cursor-pointer'
          : 'text-base font-bold py-4 text-white hover:text-amber-300 transition ease-in-out duration-500 hover:cursor-pointer'
      "
      >predictions</router-link
    >
    <!-- reports -->
    <router-link
      to="/reports"
      :class="
        reports == true
          ? 'text-base font-bold py-4 text-amber-300 underline underline-offset-4 transition ease-in-out duration-500 hover:cursor-pointer'
          : 'text-base font-bold py-4 text-white hover:text-amber-300 transition ease-in-out duration-500 hover:cursor-pointer'
      "      >reports</router-link
    >
  </div>
</template>

<script>
export default {
  props: ["location", "summary", "prediction", "reports"],
  data() {
    return {
      locationsSelected: false,
      summarySelected: false,
      predictionsSelected: false,
    };
  },
};
</script>

<style></style>
