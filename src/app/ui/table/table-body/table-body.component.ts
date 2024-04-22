import { Component } from "@angular/core";

@Component({
  selector: "app-table-body",
  templateUrl: "./table-body.component.html",
  styles: `
    :host {
      display: contents;
    }
  `,
})
export class TableBodyComponent {}
