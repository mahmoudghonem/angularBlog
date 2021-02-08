import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string = 'https://mydevsblog.herokuapp.com/users/';
  currentUser!: any;
  constructor(private http: HttpClient, private router: Router) {
    let token = this.getToken();
    if (!token) {
      this.currentUser = null;
    } else {
      let jwt = new JwtHelperService();
      const isExpired = jwt.isTokenExpired(token);
      if (isExpired)
        this.logout();
      else
        this.currentUser = jwt.decodeToken(token);
    }
  }

  public get loggedIn(): boolean {
    return this.getToken() !== null;
  }
  public getToken(){
    return localStorage.getItem('token');
  }
  login(body: any) {
    return this.http.post(`${this.url}authenticate`, body);
  }
  register(body: any) {
    return this.http.post(`${this.url}register`, body);
  }
  usernameCheck(body: any) {
    return this.http.post(`${this.url}usernamecheck`, body);
  }
  emailCheck(body: any) {
    return this.http.post(`${this.url}emailcheck`, body);
  }
  getMe() {
    return this.http.get(`${this.url}me`);
  }
  getUserById(id: any) {
    return this.http.get(`${this.url}${id}`);
  }
  getFollowing(id: any) {
    return this.http.get(`${this.url}following/${id}`);
  }
  getFollowers(id: any) {
    return this.http.get(`${this.url}followers/${id}`);
  }
  follow(id: any) {
    return this.http.patch(`${this.url}follow/${id}`, {});
  }
  unFollow(id: any) {
    return this.http.patch(`${this.url}unfollow/${id}`, {});
  }
  update(body: any) {
    return this.http.patch(`${this.url}update`, body);
  }
  delete() {
    return this.http.delete(`${this.url}delete`);
  }
  logout() {
    localStorage.removeItem('token');
    this.currentUser = null;
    this.router.navigate(['home']);
  }
}
