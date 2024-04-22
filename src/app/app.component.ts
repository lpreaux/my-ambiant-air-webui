import { AfterViewChecked, Component, OnChanges, OnInit } from "@angular/core";
import { initFlowbite } from "flowbite";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent implements AfterViewChecked {
  ngAfterViewChecked(): void {
    initFlowbite();
  }
}
