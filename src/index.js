import "./style.css";
import mapboxgl from "mapbox-gl";

import CONFIG from "./config"

function style() {
  return window.localStorage.getItem("style") || CONFIG.styles[0].url
}

let position = JSON.parse(window.localStorage.getItem("position")) || {
  zoom: 2,
  center: { lat: 24.3391016, lng: 44.1130898 }
};

new Vue({
  el: "#header",
  data: {
    styles: CONFIG.styles,
    style: style(),
    position: position,
    map: null
  },
  mounted() {
    this.loadMap();
  },
  methods: {
    loadMap: function() {
      window.localStorage.setItem("style", this.style);

      let map = new mapboxgl.Map({
        container: "map",
        style: this.style,
        center: this.position.center,
        zoom: this.position.zoom,
        preserveDrawingBuffer: true
      });

      let self = this;
      map.on("moveend", function() {
        self.position.zoom = map.getZoom();
        self.position.center = map.getCenter();
        window.localStorage.setItem("position", JSON.stringify(self.position));
      });
      this.map = map;
    }
  }
});