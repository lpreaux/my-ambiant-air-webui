import { Component, EventEmitter, Input, Output } from "@angular/core";
import { PageDetails, PageLinks } from "../../../types/page";

export interface TableFooterOptions {
  links: PageLinks;
  page: PageDetails;
}

@Component({
  selector: "app-table-footer",
  templateUrl: "./table-footer.component.html",
})
export class TableFooterComponent {
  @Input() options!: TableFooterOptions;
  @Output() pageSelected = new EventEmitter<
    "first" | "prev" | "next" | "last"
  >();
}
