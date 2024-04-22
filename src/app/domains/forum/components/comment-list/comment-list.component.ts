import { Component, Input } from "@angular/core";
import { Post } from "../../models/post";

@Component({
  selector: "app-comment-list",
  templateUrl: "./comment-list.component.html",
})
export class CommentListComponent {
  @Input({ required: true }) comments!: Post[];
}
