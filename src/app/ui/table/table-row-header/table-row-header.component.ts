import { Component, Input } from "@angular/core";

@Component({
  selector: "app-table-row-header",
  templateUrl: "./table-row-header.component.html",
  styles: `
    :host {
      display: contents;
    }
  `,
})
export class TableRowHeaderComponent {
  @Input({ required: true }) data!: any;
}
