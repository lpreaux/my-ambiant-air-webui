import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-comment-post-form",
  templateUrl: "./comment-post-form.component.html",
})
export class CommentPostFormComponent {
  @Output() messageSubmitted = new EventEmitter<string>();

  message: string = "";

  onSubmit() {
    this.messageSubmitted.emit(this.message);
  }
}
