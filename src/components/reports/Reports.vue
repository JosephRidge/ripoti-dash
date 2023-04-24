<template>
  <div class="h-screen relative">
    <Navigation
      :location="false"
      :summary="false"
      :prediction="false"
      :reports="true"
    />

    <div class="scale-90 h-64 mx-6" @click="showTable">
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
              <div @click="showTable"
                class="my-2 text-2xl tracking-tight hover:bg-orange-700 hover:cursor-pointer bg-orange-900 rounded-md w-fit px-5 py-2 text-white "
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
          SGBVs recorded from May 1st 2023.
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
        <tbody v-for="gbv in allcases" :key="Object.keys(gbv)[0]">
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
              {{ gbv[getID(gbv)].gender ? gbv[getID(gbv)].gender : "--" }}
            </td>
            <td class="text-left pr-6 pt-2">
              {{ gbv[getID(gbv)].age ? gbv[getID(gbv)].age : "--" }}
            </td>
            <td class="text-left pr-6 pt-2 capitalize line-clamp-2">
              {{ gbv[getID(gbv)].locationOfViolence }}
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
 
  </div>
</template>

<script>
import Navigation from "../navigation/Navigation.vue";
import { getDatabase, ref, onValue } from "firebase/database";

export default {
  components: {
    Navigation,
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

      users: [],
      usersKeys: [],

      probonoCasesReported: [],
      probonoCasesKeys: [],
      tableVisible: false,
    };
  },
  methods: {
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
            console.log("= == ", values);
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
      });
      console.log(" == = = > ", JSON.parse(JSON.stringify(this.casesReported)));
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
  mounted() {
    this.getCases();
    this.getProbonos();
    this.getUsers();
    this.getPoliceCases();
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
