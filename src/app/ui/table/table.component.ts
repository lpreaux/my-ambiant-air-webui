import {
  booleanAttribute,
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";
import { ColumnHeaderOptions } from "./table-column-header/table-column-header.component";
import { ColumnHeaderConfig } from "./table-head/table-head.component";
import { TableFooterOptions } from "./table-footer/table-footer.component";
import { Page, PageDetails } from "../../types/page";

export interface ColumnOptions {
  name: string;
  headerOptions?: ColumnHeaderOptions;
  field: string;
}

export interface TableOptions {
  columns: ColumnOptions[];
  elementList: string;
}

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
})
export class TableComponent<T> {
  @Input({ required: true }) options!: TableOptions;
  @Input({ required: true }) data!: Page<T>;
  @Input({ transform: booleanAttribute }) showHeader: boolean = false;
  @Input({ transform: booleanAttribute }) showFooter: boolean = false;
  @Output() pageSelected = new EventEmitter<
    "first" | "prev" | "next" | "last"
  >();
  @Output() rowClicked = new EventEmitter<T>();

  getColumnHeaderConfig(): ColumnHeaderConfig[] {
    return this.options.columns.map(column => {
      return {
        data: column.name,
        options: column.headerOptions,
      };
    });
  }

  getRowData(element: T): string[] {
    // @ts-ignore
    return this.options.columns.map(columns => element[columns.field]);
  }

  getFooterOptions(): TableFooterOptions {
    return {
      links: this.data._links,
      page: this.data.page,
    };
  }

  getElements() {
    return this.data._embedded[this.options.elementList];
  }

  onElementClicked(rowIndex: number) {
    this.rowClicked.emit(this.getElements()[rowIndex]);
  }
}
