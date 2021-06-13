import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UserDetailsComponent, UserPostsComponent, UsersComponent} from "./components";
import {UsersResolveService} from "./services";

const routes: Routes = [
  {
    path: '', component: UsersComponent,
    resolve: {usersResolve: UsersResolveService},
    children: [
      {path: ':id', component: UserDetailsComponent},
      {path: 'posts/:id', component: UserPostsComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
