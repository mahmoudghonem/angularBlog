import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string = 'https://mydevsblog.herokuapp.com/users/'
  constructor(private http: HttpClient) { }

  public get loggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }
  public getToken() {
    return localStorage.getItem('token');
  }
  login(body: any) {
    return this.http.post(`${this.url}authenticate`, body);
  }
  register(body: any) {
    return this.http.post(`${this.url}register`, body);
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
    return this.http.get(`${this.url}logout`);
  }
}
