<template>
  <div style="height: 600px; width: 800px">
    <l-map
      :use-global-leaflet="false"
      style="height: 100vh; width: 100vw"
      class="relative"
      ref="map"
      :zoom="zoom"
      :minZoom="7.5"
      :maxZoom="16"
      :center="centerboundsOfKenya"
      :maxBounds="bounds"
      :options="{ zoomControl: true }"
      :bounds="bounds"
      @ready="onLeafletReady"
    >
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
      <!-- POLYGONS 
    - Nairobi CBD
    - Karen 
    - Rongai 
    - Madaraka
    - Parklands
    - Dandora
    -->
      <!--  Nairobi CBD marker & polygon-->
      <l-polygon
        :lat-lngs="polygon.cbd"
        color="#0ffffff"
        :fill="true"
        :fillOpacity="0.5"
        fillColor="#FF9F1C"
        class="rounded"
      ></l-polygon>
      <!-- Parklands marker & polygon -1.250013235629595,36.80002978287649 -->
      <l-marker :lat-lng="[-1.293699881869827, 36.82134714926519]">
        <l-icon
          class="transition ease-in-out duration-150 shadow-lg"
          :icon-size="dynamicSize"
          :icon-url="iconUrl"
        />
      </l-marker>
      <l-polygon
        :lat-lngs="parklandsPolygon.latlng"
        color="#0ffffff"
        :fill="true"
        :fillOpacity="0.5"
        fillColor="#4d4dff"
        class="rounded"
      ></l-polygon>
    </l-map>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import {
  LMap,
  LTileLayer,
  LMarker,
  LTooltip,
  LPopup,
  LPolygon,
  LIcon,
} from "@vue-leaflet/vue-leaflet";
export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LTooltip,
    LPopup,
    LPolygon,
    LIcon,
  },
  data() {
    return {
      zoom: 2,
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      markerLatLng: [51.504, -0.159],
      iconWidth: 35,
      iconHeight: 20,
      iconSize: 40,
       iconUrl: "./assets/place.svg",
      //   rangerMarker: "./assets/ranger_marker.svg",
      //   rangerShed: "./assets/ranger_shed.svg",
      center: [-1.3092761076679664, 36.81418776512146],
      centerboundsOfKenya: [-1.3092761076679664, 36.81418776512146],
      southWestKenya: [-4.8995204, 33.9098987],
      northEastKenya: [4.62, 41.899578],
      bounds: [
        [-4.8995204, 33.9098987],
        [4.62, 41.899578],
      ],
      zoom: 11,
      WIDTH: 500,
      animaIcon: "",
      polygon: {
        //polygon for Nairobi
        cbd: [
          [-1.293699881869827, 36.82134714926519],
          [-1.2929981839886295, 36.822387400028646],
          [-1.2933271212590824, 36.82311855796124],
          [-1.2934002184251199, 36.82476366330786],
          [-1.2913169483831979, 36.82878503193376],
          [-1.2891971279911303, 36.82783452662187],
          [-1.2871869518507992, 36.83134408469542],
          [-1.2862366862153323, 36.832038684731174],
          [-1.285578809798352, 36.831819337351845],
          [-1.281192962691236, 36.825933515999026],
          [-1.2810467676581396, 36.82242395792548],
          [-1.2791096826833979, 36.82044983150897],
          [-1.2801695972840577, 36.81906063143842],
          [-1.2798406583170987, 36.81840258929961],
          [-1.2816315477397353, 36.8148564733292],
          [-1.2939484470995382, 36.82118098944153],
        ],
        color: "blue",
      },
      parklandsPolygon: {
        latlng: [
          [-1.2673063576687582, 36.81793538217846],
          [-1.2680710512167934, 36.81725548817309],
          [-1.269260574064461, 36.81636312729037],
          [-1.2704925792943982, 36.814918352527116],
          [-1.2721494129873179, 36.814408432022304],
          [-1.2695579546908817, 36.812496230130904],
          [-1.26513972472344, 36.81173134937421],
          [-1.2634828865444945, 36.80901177335039],
          [-1.2633554374102403, 36.80671713108015],
          [-1.262463293293976, 36.80412503518238],
          [-1.261486182719537, 36.80357262130295],
          [-1.2553261293602276, 36.80735453171104],
          [-1.2549012975584617, 36.80803442571752],
          [-1.2551561966475617, 36.81007410773478],
          [-1.2546039152560837, 36.81202880300174],
          [-1.2539241841516429, 36.81343108438935],
          [-1.2535418353286758, 36.81572572665959],
          [-1.2539241841516429, 36.819677610569244],
          [-1.254646398443441, 36.8218022793379],
          [-1.2568130401230917, 36.82477681561352],
          [-1.2575352536167088, 36.82622159037561],
          [-1.2577476693126357, 36.82690148438215],
          [-1.2583424331677975, 36.82694397775782],
          [-1.2615711488716386, 36.82566917649615],
          [-1.2653946228106037, 36.823799467979484],
          [-1.267391323629198, 36.822609653469215],
          [-1.2684533979055885, 36.82095241182972],
          [-1.2673488406487792, 36.81776540867682],
        ],
        color: "Blue",
      },
    };
  },
  async onLeafletReady() {
    await this.$nextTick();
    this.leafletObject = this.$refs.map.leafletObject;
    this.leafletReady = true;

    new L.Toolbar2.DrawToolbar({
      position: "topleft",
    }).addTo(this.leafletObject);
  },
};
</script>

<style></style>
