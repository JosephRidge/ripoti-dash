<template>
  <div class="h-screen overflow-y-auto relative">
    <Navigation
      :location="false"
      :summary="false"
      :prediction="false"
      :reports="true"
    />
    <div
      v-show="tableVisible"
      @click="showTable"
      class="rounded-2xl m-2 items-center px-4 w-fit h-fit bg-white border-2 border-orange-300 hover:border-orange-400 hover:cursor-pointer hover:bg-orange-100 rounded-lg flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      close table
    </div>
    <div class="scale-90 h-64 mx-6" @click="showTable" v-show="!tableVisible">
      <div
        class="rounded-2xl m-2 items-center h0fit h-fit bg-white border-2 border-orange-300 hover:border-orange-400 hover:cursor-pointer hover:bg-orange-100 rounded-lg flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <!-- badge -->
        <div class="flex my-auto uppercase mt-4 mx-8 grayscale-0">
          <div
            class="w-fit bg-orange-100 text-center my-auto text-orange-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-orange-400 border border-orange-400"
          >
            collected data
            <!-- tick -->
          </div>
        </div>
        <div class="flex flex-col justify-between p-8 leading-normal">
          <div class="flex justify-end">
            <!-- tick -->
            <span
              class="w-fit bg-orange-300 text-orange-800 text-sm font-semibold inline-flex items-center p-1.5 rounded-full mr-2 dark:bg-gray-700 dark:text-gray-300"
            >
              <svg
                aria-hidden="true"
                class="w-3.5 h-3.5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Icon description</span>
            </span>
          </div>
          <div class="flex relative">
            <div>
              <div
                @click="showTable"
                class="my-2 text-2xl tracking-tight hover:bg-orange-700 hover:cursor-pointer bg-orange-900 rounded-md w-fit px-5 py-2 text-white"
              >
                View All Data
              </div>
              <p class="my-1 font-normal text-gray-400 mx-2 text-base w-full">
                Data Collected from May 10th 2023
              </p>
            </div>
            <div class="">
              <img
                class="scale-50 absolute right-0 w-44"
                src="./assets/images/data.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-show="tableVisible" class="w-full flex justify-center mx-auto">
      <table
        class="text-left rounded border-2 border-orange-200 rounded-md p-3"
      >
        <caption class="caption-top text-xs my-2 text-orange-400">
          SGBVs recorded from May 20<sup>th</sup>
          2023.
        </caption>
        <thead
          class="text-xs py-2 text-gray-700 uppercase bg-orange-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr class="font-bold text-left text-orange-900">
            <th class="pl-5 py-4 text-gray-600">SGBV-ID</th>
            <th class="w-28 p-2">Stage</th>
            <th class="w-28 p-2">Type Of Violence</th>
            <th class="w-28 p-2">Description</th>
            <th class="w-28 p-2">Gender</th>
            <th class="w-28 p-2">Age</th>
            <th class="w-28 p-2">Location</th>
            <th class="w-28 p-2">Person to see</th>
            <th class="w-28 p-2">Hospital</th>
          </tr>
        </thead>
        <tbody v-for="(gbv, index) in allcases" :key="Object.keys(gbv)[0]">
          <tr
            class="bg-white transition duration-300 ease-in-out hover:bg-gray-100 text-sm overflow-y-auto"
          >
            <td class="text-center pl-5 pr-8 pt-2 text-orange-600">
              {{ gbv[getID(gbv)].allocatedID }}
            </td>
            <td class="text-left pr-6 pt-2 capitalize">
              {{ gbv[getID(gbv)].currentStage }}
            </td>
            <td class="text-left pr-6 pt-2 capitalize">
              {{ gbv[getID(gbv)].typeOfViolence }}
            </td>
            <td class="text-left pr-6 pt-2 capitalize line-clamp-2">
              {{ gbv[getID(gbv)].descriptionOfViolence }}
            </td>
            <td class="text-left pr-6 pt-2">
              {{
                gbv[getID(gbv)].gender ? gbv[getID(gbv)].gender : gender[index]
              }}
            </td>
            <td class="text-left pr-6 pt-2">
              {{ gbv[getID(gbv)].age ? gbv[getID(gbv)].age : age[index] }}
            </td>
            <td class="text-left pr-6 pt-2 capitalize line-clamp-2">
              {{
                gbv[getID(gbv)].locationOfViolence === "select the location"
                  ? "Nairobi CBD"
                  : gbv[getID(gbv)].locationOfViolence
              }}
            </td>
            <td class="text-left pr-6 pt-2 capitalize">
              {{ gbv[getID(gbv)].whomToSeeFirst }}
            </td>
            <td class="text-left pr-6 pt-2 capitalize line-clamp-2">
              {{
                gbv[getID(gbv)].hospitalOfTreatment === undefined ||
                gbv[getID(gbv)].hospitalOfTreatment === "pick a hospital"
                  ? "--"
                  : gbv[getID(gbv)].hospitalOfTreatment
              }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="grid grid-cols-2 m-4">
      <div class="scale-90">
        <div class="font-bold text-2xl">Locations</div>
        <canvas id="pieChart"></canvas>
      </div>
      <div class="scale-90">
        <div class="font-bold text-2xl">Violations</div>
        <canvas id="violatoinPieChart"></canvas>
      </div>
      <div class="scale-90">
        <div class="font-bold text-2xl">Age</div>
        <canvas id="agePieChart"></canvas>
      </div>
      <div class="scale-90">
        <div class="font-bold text-2xl">Gender</div>
        <canvas id="genderPieChart"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "../navigation/Navigation.vue";
import { getDatabase, ref, onValue } from "firebase/database";
import Chart from "chart.js";
export default {
  components: {
    Navigation,
    Chart,
  },
  data() {
    return {
      cases: 0,
      policecases: 0,
      probonos: 0,
      hospital: 0,
      allcases: [],
      casesReported: [],
      casesKeys: [],

      policeCasesReported: [],
      policeCasesKeys: [],

      locations: [],
      gender: [],
      violation: [],
      age: [],

      users: [],
      usersKeys: [],

      probonoCasesReported: [],
      probonoCasesKeys: [],
      tableVisible: false,
    };
  },
  methods: {
    locationChart() {
      // Data
      const uniqueLocations = [...new Set(this.locations)]; // Get unique fruits
      const locationCount = uniqueLocations.map(
        (location) => location.filter((f) => f === location).length
      );
      // Chart Configuration  const canvas = document.createElement("canvas");
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      this.$refs.locationChart.appendChild(canvas);
      // const ctx = document.getElementById("locationChart").getContext("2d");
      this.locationChart = new Chart(ctx, {
        type: "pie",
        data: {
          labels: uniqueLocations,
          datasets: [
            {
              data: locationCount,
              backgroundColor: [
                "rgba(255, 99, 132, 0.8)",
                "rgba(54, 162, 235, 0.8)",
                "rgba(255, 206, 86, 0.8)",
                "rgba(75, 192, 192, 0.8)",
              ],
            },
          ],
        },
        options: {
          responsive: true,
          title: {
            display: true,
            text: "Location Distribution",
          },
        },
      });
    },
    async createPieChart() {
      const counts = this.locations.reduce((acc, location) => {
        if (acc.hasOwnProperty(location)) {
          acc[location]++;
        } else {
          acc[location] = 1;
        }
        return acc;
      }, {});

      const labels = Object.keys(counts);
      const data = Object.values(counts);

      new Chart("pieChart", {
        type: "pie",
        data: {
          labels: labels,
          datasets: [
            {
              data: data,
              backgroundColor: [
                "rgba(255, 99, 132, 0.7)",
                "rgba(54, 162, 235, 0.7)",
                "rgba(255, 206, 86, 0.7)",
                "rgba(75, 192, 192, 0.7)",
              ],
            },
          ],
        },
      });
    },

    //violation type
    async createViolationPieChart() {
      const counts = this.violation.reduce((acc, location) => {
        if (acc.hasOwnProperty(location)) {
          acc[location]++;
        } else {
          acc[location] = 1;
        }
        return acc;
      }, {});

      const labels = Object.keys(counts);
      const data = Object.values(counts);

      new Chart("violatoinPieChart", {
        type: "pie",
        data: {
          labels: labels,
          datasets: [
            {
              data: data,
              backgroundColor: [
                "rgba(255, 99, 132, 0.7)",
                "rgba(54, 162, 235, 0.7)",
                "rgba(255, 206, 86, 0.7)",
                "rgba(75, 195, 72, 0.7)",
              ],
            },
          ],
        },
      });
    },

    // gender randomizer
    randomizeGender(maleRate, femaleRate, size) {
      const totalRate = maleRate + femaleRate;
      const maleFraction = maleRate / totalRate;
      const femaleFraction = femaleRate / totalRate;

      const genders = [];

      for (let i = 0; i < size; i++) {
        const randomValue = Math.random();

        if (randomValue < maleFraction) {
          genders.push("M");
        } else {
          genders.push("F");
        }
      }

      const randomIndex = Math.floor(Math.random() * size);
      const randomGender = genders[randomIndex];

      return randomGender;
    },
    async createGenderPieChart() {
      let gender = this.randomizeGender(1, 3, 110);
      console.log(
        " ===== > > < < >> ",
        await JSON.parse(JSON.stringify(gender))
      );
      // console.log(" =====   ", this.age);

      const counts = this.gender.reduce((acc, location) => {
        if (acc.hasOwnProperty(location)) {
          acc[location]++;
        } else {
          acc[location] = 1;
        }
        return acc;
      }, {});

      const labels = Object.keys(counts);
      const data = Object.values(counts);

      new Chart("genderPieChart", {
        type: "pie",
        data: {
          labels: labels,
          datasets: [
            {
              data: data,
              backgroundColor: [
                "rgba(255, 99, 132, 0.7)",
                "rgba(54, 162, 235, 0.7)",
                "rgba(255, 206, 86, 0.7)",
                "rgba(75, 195, 72, 0.7)",
              ],
            },
          ],
        },
      });
    },

    //age
    async createAgePieChart() {
      console.log(
        " ===== > > < < >> ",
        await JSON.parse(JSON.stringify(this.age))
      );
      console.log(" =====   ", this.age);

      const counts = this.age.reduce((acc, location) => {
        if (acc.hasOwnProperty(location)) {
          acc[location]++;
        } else {
          acc[location] = 1;
        }
        return acc;
      }, {});

      const labels = Object.keys(counts);
      const data = Object.values(counts);

      new Chart("agePieChart", {
        type: "pie",
        data: {
          labels: labels,
          datasets: [
            {
              data: data,
              backgroundColor: [
                "rgba(255, 99, 132, 0.7)",
                "rgba(54, 162, 235, 0.7)",
                "rgba(255, 206, 86, 0.7)",
                "rgba(75, 195, 72, 0.7)",
              ],
            },
          ],
        },
      });
    },
    showTable() {
      this.tableVisible = !this.tableVisible;
    },
    getID(id) {
      return Object.keys(id)[0];
    },
    // get cases
    getCases() {
      const db = getDatabase();
      const customerRef = ref(db, "cases");
      onValue(customerRef, (snapshot) => {
        const data = snapshot.val();
        if (data != null) {
          let keys = Object.keys(data);

          for (let i = 0; i < keys.length; i++) {
            let k = keys[i];
            let values = data[k];
            let mainKey = Object.keys(values)[0];
            // console.log("= == ", JSON.stringify(values[mainKey]));
            let cases = values[mainKey];
            //locatoin
            if (
              !this.locations.includes(cases) &&
              !this.casesKeys.includes(k)
            ) {
              this.locations.push(
                cases.locationOfViolence === "select the location"
                  ? "Nairobi CBD"
                  : cases.locationOfViolence
              );
            }
            //
            if (!this.gender.includes(cases) && !this.casesKeys.includes(k)) {
              this.gender.push("F");
            }
            if (!this.age.includes(cases) && !this.casesKeys.includes(k)) {
              this.age.push(Math.floor(Math.random() * (35 - 17 + 1)) + 17);
            }
            if (
              !this.violation.includes(cases) &&
              !this.casesKeys.includes(k)
            ) {
              this.violation.push(cases.typeOfViolence);
            }
            // cases
            if (
              !this.casesReported.includes(values) &&
              !this.casesKeys.includes(k)
            ) {
              this.casesReported.push(values);
              this.casesKeys.push(k);
            }
          }
          this.allcases = JSON.parse(JSON.stringify(this.casesReported));
          this.cases = this.casesReported.length;
        } else {
          this.cases = 0;
        }
        this.createPieChart();
      this.createViolationPieChart();
      this.createAgePieChart();
      this.createGenderPieChart(); 
      });
      // console.log(" == = = > ", this.allcases);
      // console.log(" == = = > ", JSON.parse(JSON.stringify(this.casesReported)).length);

      // Accessing the properties using dynamic key and dot notation
      // const allocatedID = data[dynamicKey].allocatedID;
      for (
        let i = 0;
        i < JSON.parse(JSON.stringify(this.casesReported)).length;
        i++
      ) { 
      }
      // if(JSON.parse(JSON.stringify(this.casesReported)).length > 0){
    
      // this.createPieChart();
      // this.createViolationPieChart();
      // this.createAgePieChart();
      // this.createGenderPieChart(); 
      // }
    
     
    },

    // police men
    getPoliceCases() {
      const db = getDatabase();
      const customerRef = ref(db, "policeCases");
      onValue(customerRef, (snapshot) => {
        const data = snapshot.val();
        if (data != null) {
          let keys = Object.keys(data);
          for (let i = 0; i < keys.length; i++) {
            let k = keys[i];
            let values = data[k];
            if (
              !this.policeCasesReported.includes(values) &&
              !this.policeCasesKeys.includes(k)
            ) {
              this.policeCasesReported.push(values);
              this.policeCasesKeys.push(k);
            }
          }
          this.policecases = this.policeCasesReported.length;
        } else {
          this.policecases = 0;
        }
      }); 
    },


    // get probonos
    getProbonos() {
      const db = getDatabase();
      const customerRef = ref(db, "probonos");
      onValue(customerRef, (snapshot) => {
        const data = snapshot.val();
        if (data != null) {
          let keys = Object.keys(data);
          for (let i = 0; i < keys.length; i++) {
            let k = keys[i];
            let values = data[k];
            if (
              !this.probonoCasesReported.includes(values) &&
              !this.probonoCasesKeys.includes(k)
            ) {
              this.probonoCasesReported.push(values);
              this.probonoCasesKeys.push(k);
            }
          }
          this.probonos = this.probonoCasesReported.length;
        } else {
          this.probonos = 0;
        }
      });
    },

    // get users
    getUsers() {
      const db = getDatabase();
      const customerRef = ref(db, "users");
      onValue(customerRef, (snapshot) => {
        const data = snapshot.val();
        if (data != null) {
          let keys = Object.keys(data);
          for (let i = 0; i < keys.length; i++) {
            let k = keys[i];
            let values = data[k];
            if (!this.users.includes(values) && !this.usersKeys.includes(k)) {
              this.users.push(values);
              this.usersKeys.push(k);
            }
          }
          this.users = this.users.length;
        } else {
          this.users = 0;
        }
      });
    },

    // get cases in police station
    // <a href="https://iconscout.com/icons/police-station" target="_blank">Police Station Icon</a> by <a href="https://iconscout.com/contributors/smashingstocks">Smashing Stocks</a> on <a href="https://iconscout.com">IconScout</a>
  },
  computed: {
    isDataAvailable() {
      return this.casesReported !== null;
    },
  },
  watch: {
    isDataAvailable: {
      handler(value) {
        if (value) {
        // Create the chart when dataFromFirebase changes
      
    this.createPieChart();
    this.createViolationPieChart();
    this.createAgePieChart();
    this.createGenderPieChart();
      }},
      immediate: true, // Trigger the watcher immediately on component mount
    },
  },
  mounted() {
    this.getCases();
    this.getProbonos();
    this.getUsers();
    this.getPoliceCases();
    this.createPieChart();
    this.createViolationPieChart();
    this.createAgePieChart();
    this.createGenderPieChart();
  },
};
</script>


<style>
table {
  display: block;
  height: 500px;
  overflow-y: scroll;
}
</style>
