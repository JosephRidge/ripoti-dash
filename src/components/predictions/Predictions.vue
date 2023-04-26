<template>
  <div class="h-screen w-screen overflow-x-hidden overflow-y-scroll">
    <Navigation
      :location="false"
      :summary="false"
      :prediction="true"
      :reports="false"
    />

    <!-- 
- 7 stages stages split into 4 
1 : Business Value 
2. Proof of concept 
3. Deployment

     -->

    <div class="px-10 mt-10">
      <h1 class="text-2xl mt-4 mx-10 font-bold">What you can currently see:</h1>
      <hr class="mx-10 mt-2 w-1/3" />

      <ol class="items-center w-full mx-10 space-y-4 grid grid-cols-2">
        <li
          class="flex items-center text-orange-600 dark:text-orange-500 space-x-2.5"
        >
          <span
            class="flex items-center justify-center w-8 h-8 border border-orange-600 rounded-full shrink-0 dark:border-blue-500"
          >
            1
          </span>
          <span>
            <h3 class="font-bold leading-tight">Problem Statement</h3>
            <p class="text-sm text-gray-500">
              Sexual Gender Based Violence Outrise
            </p>
          </span>
        </li>
        <li
          class="flex items-center text-orange-500 dark:text-orange-400 space-x-2.5"
        >
          <span
            class="flex items-center justify-center w-8 h-8 border border-orange-500 rounded-full shrink-0 dark:border-gray-400"
          >
            2
          </span>
          <span>
            <h3 class="font-bold leading-tight">Data</h3>
            <p class="text-sm text-gray-500">
              Collection done via ripoti mobile app <br />
              Preparation & Visualization done on dashboard <br />
            </p>
          </span>
        </li>
        <li
          class="flex items-center text-orange-500 dark:text-gray-400 space-x-2.5"
        >
          <span
            class="flex items-center justify-center w-8 h-8 border border-orange-500 rounded-full shrink-0 dark:border-gray-400"
          >
            3
          </span>
          <span>
            <h3 class="font-bold leading-tight">Training our algorithm</h3>
            <p class="text-sm text-gray-500">
              Data prepared is split into two groups training data being one of
              them <br />
              The data is consistently fed through to the Machine Learning model
              <br />
              The out come is then outputed
            </p>
          </span>
        </li>

        <li
          class="flex items-center text-orange-500 dark:text-orange-400 space-x-2.5"
        >
          <span
            class="flex items-center justify-center w-8 h-8 border border-orange-500 rounded-full shrink-0 dark:border-gray-400"
          >
            4
          </span>
          <span>
            <h3 class="font-bold leading-tight">Correlation with Prediciton</h3>
            <p class="text-sm text-gray-500 w-2/3">
              The Machine Learning model relays the prediction <br />
              The predictoin is correlated with actual events from the ground/
              cases that have been reported <br />
            </p>
          </span>
        </li>
      </ol>
      <hr class="mx-10 mt-4" />
      <h1 class="text-2xl mt-6 px-10 font-bold">Our Progress so far:</h1>
      <hr class="mx-10 mt-2 w-1/4" />
    </div>

    <div class="w-screen p-4">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-1 mx-16">
        <!-- 1-->
        <div class="scale-90 h-96">
          <div
            class="rounded-2xl m-2 items-center h-full bg-white border-2 border-green-300 hover:border-green-400 rounded-lg flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <!-- badge -->
            <div class="flex my-auto uppercase mt-4 mx-4">
              <div
                class="w-fit bg-green-100 text-center my-auto text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400"
              >
                complete
                <!-- tick -->
              </div>
            </div>

            <div class="flex flex-col justify-between p-8 leading-normal">
              <div class="flex justify-end">
                <!-- tick -->
                <span
                  class="w-fit bg-green-300 text-green-800 text-sm font-semibold inline-flex items-center p-1.5 rounded-full mr-2 dark:bg-gray-700 dark:text-gray-300"
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

              <h5
                class="mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                Problem Definition
              </h5>
              <p class="my-1 font-normal text-gray-400 text-base">
                GBV Occurence Predition.
              </p>
            </div>
            <img
              class="object-cover w-full scale-75 xl:scale-90 rounded-t-lg h-96 md:h-36 md:w-full mb-4"
              src="./assets/images/problemdef.png"
              alt=""
            />
          </div>
        </div>
        <!-- 2 -->
        <div class="scale-90 h-96">
          <div
            class="rounded-2xl m-2 items-center h-full h-fit bg-white border-2 border-orange-300 hover:border-orange-400 rounded-lg flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <!-- badge -->
            <div class="flex my-auto uppercase mt-4 mx-4 grayscale-0">
              <div
                class="w-fit bg-orange-100 text-center my-auto text-orange-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-orange-400 border border-orange-400"
              >
                in-progress
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

              <h5
                class="mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                Data
              </h5>
              <p class="my-1 font-normal text-gray-400 text-base w-full">
                Collection | Preparation | Visualisation
              </p>
            </div>
            <img
              class="object-cover w-full scale-75 xl:scale-90 rounded-t-lg h-96 md:h-36 md:w-full mb-4"
              src="./assets/images/data.png"
              alt=""
            />
          </div>
        </div>
        <!-- 3 -->
        <div class="scale-90 h-96">
          <div
            class="rounded-2xl m-2 items-center h-full h-fit bg-white border-2 border-orange-300 hover:border-orange-400 rounded-lg flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div class="flex my-auto uppercase mt-4 mx-4 grayscale-0">
              <div
                class="w-fit bg-orange-100 text-center my-auto text-orange-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-orange-400 border border-orange-400"
              >
                training-stage
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

              <h5
                class="mt-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                Machine Learning
              </h5>
              <p class="my-2 font-normal text-gray-400 text-sm w-full">
                Modelling | Feature-Engineering
              </p>
            </div>
            <img
              class="object-cover w-full scale-75 xl:scale-90 rounded-t-lg h-96 md:h-36 md:w-full mb-4"
              src="./assets/images/ml.png"
              alt=""
            />
          </div>
        </div>
        <!-- 4 -->
        <div class="scale-90 h-96 grayscale">
          <div
            class="rounded-2xl m-2 items-center h-full h-fit bg-white border-2 border-orange-300 hover:border-orange-400 rounded-lg flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div class="flex my-auto uppercase mt-4 mx-4 grayscale-0">
              <div
                class="w-fit bg-orange-100 text-center my-auto text-orange-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-orange-400 border border-orange-400"
              >
                not-started
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

              <h5
                class="mt-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                Problem Correlation
              </h5>
              <p class="my-2 font-normal text-gray-400 text-sm w-full">
                Modelling | Feature-Engineering
              </p>
            </div>
            <img
              class="object-cover w-full scale-75 xl:scale-90 rounded-t-lg h-96 md:h-36 md:w-full mb-4"
              src="./assets/images/correlation.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>

    <div class="px-10 mx-10 mb-10 bg-amber-200 pt-5 pb-8 shadow-xl rounded-2xl">
      <h1 class="text-2xl mt-6 font-bold">Data Collection</h1>
      <hr class="my-2" />
      <div class="text-gray-800 my-1 mx-2 text-lg">
        Total Collected Data:
        <span class="text-sm rounded-full bg-amber-400 font-bold px-4 mx-1">
          {{ cases }}</span
        >
      </div>
      <div class="text-gray-800 mx-2 text-lg">
        Target Dataset size to get good Predictions:
        <span class="text-sm rounded-full bg-amber-400 font-bold px-4 mx-1">
          {{ targetData }}</span
        >
        datasets.
      </div>
      <div class="my-1 text-gray-800 mx-2 text-lg">
        Target Outcome:
        <span class="text-sm rounded-full bg-white font-bold px-4 mx-1 py-1">
          Map hotspot areas, predict the number of SGBV cases and timing of
          violations, and thereafter work with duty-bearers, including
          hospitals, law enforcement officials, social workers, and community
          members, to ensure that services are put in place to prevent SGBV and
          provide assistance to the victims. 
        </span>
      </div>
      <hr class="my-2" />
      <div class="mt-3 text-gray-800 mx-2 text-sm mx-auto text-center">
        🗈 Kindly note, our Machine Learning Algorithm is built using
        <span
          class="rounded-full bg-gray-900 text-white font-bold px-4 mx-1 py-1"
        >
          Python</span
        >
        and takes the
        <span
          class="rounded-full bg-gray-900 text-white font-bold px-4 mx-1 py-1"
        >
          Poisson Model</span
        >
        authoring.
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import Navigation from "../navigation/Navigation.vue";
import Footer from "../footer/Footer.vue";
import { getDatabase, ref, onValue } from "firebase/database";

export default {
  components: {
    Navigation,
  },
  data() {
    return {
      cases: 0,
      policecases: 0,
      targetData: 1000,
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
        } else {
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

<style></style>
