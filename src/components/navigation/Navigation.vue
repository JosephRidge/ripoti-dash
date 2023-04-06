 <template>
   <div class="flex justify-end gap-6  bg-blue-700 px-10 ">
    <!-- map -->
    <h1 class=" text-xl py-4 text-white hover:text-amber-300 transition ease-in-out duration-500 hover:cursor-pointer">locations</h1>
    <!-- summary -->
    <h1 class="text-xl py-4 text-white hover:text-amber-300 transition ease-in-out duration-500 hover:cursor-pointer">summary</h1>
    <!-- predictions -->
    <h1 class="text-xl py-4 text-white hover:text-amber-300 transition ease-in-out duration-500 hover:cursor-pointer">predictions</h1>
   </div>
 </template>
 
 <script>
 export default {
    data(){
        return {
            locationsSelected:false,
            summarySelected:false,
            predictionsSelected:false
        }
    } 
 }
 </script>
 
 <style>
 
 </style>