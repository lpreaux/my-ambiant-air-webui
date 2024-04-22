import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TableComponent } from "./table.component";
import { TableCellComponent } from "./table-cell/table-cell.component";
import { TableRowHeaderComponent } from "./table-row-header/table-row-header.component";
import { TableRowComponent } from "./table-row/table-row.component";
import { TableColumnHeaderComponent } from "./table-column-header/table-column-header.component";
import { TableHeadComponent } from "./table-head/table-head.component";
import { TableBodyComponent } from "./table-body/table-body.component";
import { TableHeaderComponent } from "./table-header/table-header.component";
import { TableFooterComponent } from "./table-footer/table-footer.component";
import { PaginationModule } from "../pagination/pagination.module";

@NgModule({
  declarations: [
    TableComponent,
    TableCellComponent,
    TableRowHeaderComponent,
    TableRowComponent,
    TableColumnHeaderComponent,
    TableHeadComponent,
    TableBodyComponent,
    TableHeaderComponent,
    TableFooterComponent,
  ],
  imports: [CommonModule, PaginationModule],
  exports: [TableComponent],
})
export class TableModule {}
