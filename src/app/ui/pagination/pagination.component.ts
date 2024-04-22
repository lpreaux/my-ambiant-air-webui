import { Component, EventEmitter, Input, Output } from "@angular/core";

export interface PaginationLinks {
  first?: {
    href: string;
  };
  prev?: {
    href: string;
  };
  self: {
    href: string;
  };
  next?: {
    href: string;
  };
  last?: {
    href: string;
  };
}

@Component({
  selector: "app-pagination",
  templateUrl: "./pagination.component.html",
})
export class PaginationComponent {
  @Input({ required: true }) links!: PaginationLinks;
  @Input({ required: true }) currentPage!: number;
  @Input({ required: true }) totalPages!: number;
  @Output() pageSelected = new EventEmitter<
    "first" | "prev" | "next" | "last"
  >();

  onPageSelected(page: "first" | "prev" | "next" | "last") {
    this.pageSelected.emit(page);
  }
}
