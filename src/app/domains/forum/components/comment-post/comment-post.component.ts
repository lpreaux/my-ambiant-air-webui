import { Component, Input } from "@angular/core";
import { Post } from "../../models/post";

@Component({
  selector: "app-comment-post",
  templateUrl: "./comment-post.component.html",
})
export class CommentPostComponent {
  @Input({ required: true }) comment!: Post;
}
