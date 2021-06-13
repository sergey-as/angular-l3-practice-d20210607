import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PostCommentsComponent, PostDetailsComponent, PostsComponent} from "./components";
import {PostsResolveService} from "./services";

const routes: Routes = [
  {
    path: '', component: PostsComponent,
    resolve: {postsResolve: PostsResolveService},
    children: [
      {path: ':id', component: PostDetailsComponent},
      {path: 'comments/:id', component: PostCommentsComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {
}
