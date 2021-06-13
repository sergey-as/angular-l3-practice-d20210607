import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {Comment} from "../../../../models";
import {CommentService} from "../../services";

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.css']
})
export class PostCommentsComponent {

  comments: Comment[];

  constructor(private activatedRoute: ActivatedRoute, private commentService: CommentService) {
    this.activatedRoute.params.subscribe(params => {
      this.commentService.getCommentsByPostId(params.id).subscribe(value => this.comments = value)
    })
  }

}
