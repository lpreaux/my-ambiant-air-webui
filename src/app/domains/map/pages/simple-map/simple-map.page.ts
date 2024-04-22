import { Component } from "@angular/core";
import { latLng, Map, MapOptions, tileLayer } from "leaflet";

@Component({
  selector: "app-simple-map",
  templateUrl: "./simple-map.page.html",
})
export class SimpleMapPage {
  map?: Map;
  mapOptions: MapOptions = {
    layers: [
      tileLayer(
        "https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Navigation?type=style&token={accessToken}",
        {
          accessToken: "",
          opacity: 0.7,
          maxZoom: 19,
          detectRetina: true,
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }
      ),
    ],
    zoom: 6,
    center: latLng(46.823, 1.736),
  };
  receiveMap($event: Map) {
    this.map = $event;
  }
}
