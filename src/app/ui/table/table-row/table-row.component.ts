import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from "@angular/core";

@Component({
  selector: "app-table-row",
  templateUrl: "./table-row.component.html",
  styles: `
    :host {
      display: contents;
    }
  `,
})
export class TableRowComponent {
  @Input({ required: true }) lineIndex!: number;
  @Input({ required: true }) data!: string[];
  @Output() rowClicked = new EventEmitter<number>();

  onRowClicked() {
    this.rowClicked.emit(this.lineIndex);
  }
}
