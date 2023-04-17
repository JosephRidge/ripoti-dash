<template>
  <div class="h-screen bg-gray-100">
    <Navigation
      :location="false"
      :summary="true"
      :prediction="false"
      :reports="false"
    />
    <div class="my-10 md:text-2xl mx-10">
      Summary of cases reported by Anonymous users and the stages involved and
      number of current case per stage.<br />The platform currently has
      <span class="rounded-full bg-amber-200 p-2 text-base"> {{ users }} </span>
      accounts signed up.
    </div>
    <div
      class="flex justify-center my-auto py-auto m-5 md:m-10 overflow-x-scroll w-screen"
    >
      <!-- cases -->
      <div
        class="hover:cursor-pointer scale-90 bg-white rounded-xl overflow-hidden shadow-md m-5 group hover:shadow-lg hover:bg-amber-50 w-64 p-2"
      >
        <img
          class="w-56 h-44 mx-auto"
          src="./assets/images/cases.svg"
          alt="current cases recorded"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl text-center mb-2">Total Cases</div>
          <p class="text-gray-700 text-3xl font-bold mx-auto text-center">
            {{ cases }}
          </p>
        </div>
        <div class="px-6 pt-4 pb-2 flex justify-center">
          <span
            class="inline-block bg-gray-200 group-hover:bg-amber-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 : mr-2 mb-2"
            >#reported cases</span
          >
        </div>
      </div>

      <!-- hospital -->
      <div>
        <div
          class="hover:cursor-pointer scale-90 bg-white rounded-xl overflow-hidden shadow-md m-5 group hover:shadow-lg hover:bg-amber-50 w-64 p-2"
        >
          <img
            class="w-56 h-44 mx-auto"
            src="./assets/images/hospital.svg"
            alt="current cases recorded in hospital"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl text-center mb-2">Hospital Cases</div>
            <p class="text-gray-700 text-3xl font-bold mx-auto text-center">
              {{ cases }}
            </p>
          </div>
          <div class="px-6 pt-4 pb-2 flex justify-center">
            <span
              class="inline-block bg-gray-200 group-hover:bg-amber-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 : mr-2 mb-2"
              >#reported hospital cases</span
            >
          </div>
        </div>
      </div>

      <!-- police -->
      <div>
        <div>
          <div
            class="hover:cursor-pointer scale-90 bg-white rounded-xl overflow-hidden shadow-md m-5 group hover:shadow-lg hover:bg-amber-50 w-64 p-2"
          >
            <div class="h-44 my-auto py-5">
              <img
                class="w-56 h-36 my-auto mx-auto"
                src="./assets/images/police-station.svg"
                alt="current cases recorded in hospital"
              />
            </div>

            <div class="px-6 py-4">
              <div class="font-bold text-xl text-center mb-2">Police Cases</div>
              <p class="text-gray-700 text-3xl font-bold mx-auto text-center">
                {{ policecases }}
              </p>
            </div>
            <div class="px-6 pt-4 pb-2 flex justify-center">
              <span
                class="inline-block bg-gray-200 group-hover:bg-amber-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 : mr-2 mb-2"
                >#reported police cases</span
              >
            </div>
          </div>
        </div>
      </div>

      <!-- probonos -->
      <div>
        <div>
          <div
            class="hover:cursor-pointer scale-90 bg-white rounded-xl overflow-hidden shadow-md m-5 group hover:shadow-lg hover:bg-amber-50 w-64 p-2"
          >
            <img
              class="w-56 h-44 mx-auto"
              src="./assets/images/help.svg"
              alt="current cases recorded in hospital"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl text-center mb-2">
                Probono Cases
              </div>
              <p class="text-gray-700 text-3xl font-bold mx-auto text-center">
                {{ probonos }}
              </p>
            </div>
            <div class="px-6 pt-4 pb-2 flex justify-center">
              <span
                class="inline-block bg-gray-200 group-hover:bg-amber-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 : mr-2 mb-2"
                >#reported probono cases</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="text-2xl py-2 font-bold text-center my-4">Coming soon!</div> -->
    <!-- <div>
      <img
        src="./assets/images/comingsoon.svg"
        class="w-1/3 mx-auto"
        alt="coming soon"
        srcset=""
      />
    </div> -->
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
      casesReported: [],
      casesKeys: [],

      policeCasesReported: [],
      policeCasesKeys: [],

      users: [],
      usersKeys: [],

      probonoCasesReported: [],
      probonoCasesKeys: [],
    };
  },
  methods: {
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
          if (
            !this.casesReported.includes(values) &&
            !this.casesKeys.includes(k)
          ) {
            this.casesReported.push(values);
            this.casesKeys.push(k);
          }
        }
        this.cases = this.casesReported.length;
      }
      else{
        this.cases = 0;
      }
      });
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
      }
      else{
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

<style></style>
