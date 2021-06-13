import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {Post} from "../../../../models";
import {PostService} from "../../services";

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent {

  posts: Post[];

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {
    this.activatedRoute.params.subscribe(params => {
      // console.log(params.id);
      this.postService.getPostsByUserId(params.id).subscribe(value => this.posts = value)
    });
  }

}
