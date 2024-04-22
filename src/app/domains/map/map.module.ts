import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MapRoutingModule } from "./map-routing.module";
import { SimpleMapPage } from "./pages/simple-map/simple-map.page";
import { OsmMapComponent } from "../../shared/osm-map/osm-map.component";
import { NgxLoadingControlModule } from "@runette/ngx-leaflet-loading";

@NgModule({
  declarations: [SimpleMapPage],
  imports: [
    CommonModule,
    MapRoutingModule,
    OsmMapComponent,
    NgxLoadingControlModule,
  ],
})
export class MapModule {}
