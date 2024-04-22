import { Component, Input } from "@angular/core";

@Component({
  selector: "app-table-cell",
  templateUrl: "./table-cell.component.html",
  styles: `
    :host {
      display: contents;
    }
  `,
})
export class TableCellComponent {
  @Input({ required: true }) data!: any;
}
