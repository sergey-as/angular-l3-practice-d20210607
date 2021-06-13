import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {User} from "../../../models";

@Injectable({
  providedIn: 'root'
})

export class UsersResolveService implements Resolve<User[]> {

  constructor(private httpClient: HttpClient) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]> | Promise<User[]> | User[] {
    return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

}
