import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {PostComponent, UserComponent, UserDetailsComponent, UserPostsComponent, UsersComponent} from './components';
import {UsersResolveService} from "./services";


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
    UserPostsComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  providers: [UsersResolveService],
})
export class UsersModule {
}
