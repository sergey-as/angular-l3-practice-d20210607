import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {Post} from "../../../../models";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent {

  @Input()
  post: Post;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  goToDetails(): void {
    // this.router.navigate(['posts', this.post.id]); // post/:id
    // this.activatedRoute.url.subscribe(value => console.log(value));
    this.router.navigate([this.post.id], {relativeTo: this.activatedRoute, state: this.post}); // post/:id
  }

}
