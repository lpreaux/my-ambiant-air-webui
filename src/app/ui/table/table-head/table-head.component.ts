import { Component, Input } from "@angular/core";
import { ColumnHeaderOptions } from "../table-column-header/table-column-header.component";

export interface ColumnHeaderConfig {
  data: string;
  options?: ColumnHeaderOptions;
}

@Component({
  selector: "app-table-head",
  templateUrl: "./table-head.component.html",
  styles: `
    :host {
      display: contents;
    }
  `,
})
export class TableHeadComponent {
  @Input({ required: true }) data!: ColumnHeaderConfig[];
}
