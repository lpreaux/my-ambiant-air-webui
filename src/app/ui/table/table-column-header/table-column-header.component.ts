import { Component, Input } from "@angular/core";

export interface ColumnHeaderOptions {
  srOnly?: boolean;
}

@Component({
  selector: "app-table-column-header",
  templateUrl: "./table-column-header.component.html",
  styles: `
    :host {
      display: contents;
    }
  `,
})
export class TableColumnHeaderComponent {
  @Input({ required: true }) data!: string;
  @Input({ required: false }) options?: ColumnHeaderOptions;
}
