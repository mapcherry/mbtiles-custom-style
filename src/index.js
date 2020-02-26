import "./style.css";
import mapboxgl from "mapbox-gl";

import CONFIG from "./config"

function style() {
  return window.localStorage.getItem("style") || CONFIG.styles[0].url
}

let position = JSON.parse(window.localStorage.getItem("position")) || {
  zoom: 13,
  center: { lat: 46.76517, lng: 23.58044 }
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