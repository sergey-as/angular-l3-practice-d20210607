import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";

import {AppComponent, HomeComponent} from './components';

let routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', loadChildren:() => import('./modules/users/users.module').then(m => m.UsersModule)},
  {path: 'posts', loadChildren:() => import('./modules/posts/posts.module').then(m => m.PostsModule)},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
