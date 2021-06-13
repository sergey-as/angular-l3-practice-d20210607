import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PostsRoutingModule} from './posts-routing.module';
import {
  CommentComponent,
  PostCommentsComponent,
  PostComponent,
  PostDetailsComponent,
  PostsComponent
} from "./components";
import {PostsResolveService} from "./services";


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostDetailsComponent,
    PostCommentsComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule
  ],
  providers: [PostsResolveService]
})
export class PostsModule {
}
