import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from "@angular/core";
import { LeafletModule } from "@asymmetrik/ngx-leaflet";
import {
  Control,
  DomUtil,
  latLng,
  LeafletEvent,
  Map,
  MapOptions,
  tileLayer,
} from "leaflet";

declare module "leaflet" {
  interface Control {
    _addTo(map: Map): Control;
  }
  interface Map {
    _leaflet_id: number;
    _container: HTMLElement;
  }
}

@Component({
  selector: "app-osm-map",
  standalone: true,
  imports: [LeafletModule],
  template: `<div
    class="map-container"
    leaflet
    [leafletOptions]="options"
    (leafletMapReady)="onMapReady($event)"
    (leafletMapZoomEnd)="onMapZoomEnd($event)"></div>`,
  styles: [
    `
      .map-container {
        width: 100%;
        height: 100%;
        position: inherit;
      }
    `,
  ],
})
export class OsmMapComponent implements OnInit, OnDestroy {
  @Output() map$: EventEmitter<Map> = new EventEmitter();
  @Output() zoom$: EventEmitter<number> = new EventEmitter();
  @Input() options: MapOptions = {
    layers: [
      tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        opacity: 0.7,
        maxZoom: 19,
        detectRetina: true,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }),
    ],
    zoom: 6,
    center: latLng(46.823, 1.736),
  };
  public map!: Map;
  public zoom!: number;

  constructor() {}

  ngOnInit() {
    if (!Control.Attribution.prototype._addTo) {
      // Use a compact attribution control for small map container widths
      Control.Attribution.prototype._addTo =
        Control.Attribution.prototype.addTo;

      Control.Attribution.prototype.addTo = function (map) {
        Control.Attribution.prototype._addTo.call(this, map);

        // use the css checkbox hack to toggle the attribution
        const container = this.getContainer();
        if (!container) {
          throw `There was an error while initialising OsmMapComponent`;
        }

        const parent = container.parentNode;
        if (!parent) {
          throw `There was an error while initialising OsmMapComponent`;
        }

        const checkbox = document.createElement("input");
        const label = document.createElement("label");
        const checkboxId = map._container.id + "-attribution-toggle"; // unique name if multiple maps are present

        checkbox.setAttribute("id", checkboxId);
        checkbox.setAttribute("type", "checkbox");
        checkbox.classList.add("leaflet-compact-attribution-toggle");
        parent.insertBefore(checkbox, parent.firstChild);

        label.setAttribute("for", checkboxId);
        label.classList.add("leaflet-control");
        label.classList.add("leaflet-compact-attribution-label");
        parent.appendChild(label);

        // initial setup for map load
        if (map._container.offsetWidth <= 600) {
          DomUtil.addClass(container, "leaflet-compact-attribution");
        }

        // update on map resize
        map.on(
          "resize",
          function () {
            if (map._container.offsetWidth > 600) {
              DomUtil.removeClass(container, "leaflet-compact-attribution");
            } else {
              DomUtil.addClass(container, "leaflet-compact-attribution");
            }
          },
          this
        );

        return this;
      };
    }
  }

  ngOnDestroy() {
    this.map.clearAllEventListeners();
    this.map.remove();
  }

  onMapReady(map: Map) {
    this.map = map;
    this.map$.emit(map);
    this.zoom = map.getZoom();
    this.zoom$.emit(this.zoom);
  }

  onMapZoomEnd(e: LeafletEvent) {
    console.log(e);
    this.zoom = e.target.getZoom();
    this.zoom$.emit(this.zoom);
  }
}
