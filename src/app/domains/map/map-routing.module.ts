import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SimpleMapPage } from "./pages/simple-map/simple-map.page";

const routes: Routes = [
  { path: "", pathMatch: "full", component: SimpleMapPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapRoutingModule {}
