import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '../models/blogModel';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private url: string = 'https://mydevsblog.herokuapp.com/articles/'
  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get(`${this.url}`);
  }
  getBlogs(page?: number, limit?: number) {
    if (page && limit)
      return this.http.get(`${this.url}getBlogs?page=${page}&limit=${limit}`);
    else if (limit)
      return this.http.get(`${this.url}getBlogs?limit=${limit}`);
    else if (page)
      return this.http.get(`${this.url}getBlogs?page=${page}`);
    else
      return this.http.get(`${this.url}getBlogs`);
  }
  getMyBlogs() {
    return this.http.get(`${this.url}myarticles`);
  }
  getFollowBlogs(page?: number, limit?: number) {
    if (page && limit)
      return this.http.get(`${this.url}followArticles?page=${page}&limit=${limit}`);
    else if (limit)
      return this.http.get(`${this.url}followArticles?limit=${limit}`);
    else if (page)
      return this.http.get(`${this.url}followArticles?page=${page}`);
    else
      return this.http.get(`${this.url}followArticles`);
  }
  getSavedBlogs() {
    return this.http.get(`${this.url}savedArticles`);
  }
  searchBy(tag?: string, author?: string, title?: string) {
    if (tag)
      return this.http.get(`${this.url}search?tags=${tag}`);
    else if (author)
      return this.http.get(`${this.url}search?author=${author}`);
    else
      return this.http.get(`${this.url}search?title=${title}`);
  }
  getBlog(id: any) {
    return this.http.get(`${this.url}${id}`);
  }
  getBlogLikes(id: any) {
    return this.http.get(`${this.url}likecount/${id}`);
  }
  createBlog(formData: FormData) {
    return this.http.post(`${this.url}create`, formData);
  }
  updatePost(id: any, body: any) {
    return this.http.patch(`${this.url}update/${id}`, body);
  }
  likeBlog(id: any) {
    return this.http.patch(`${this.url}like/${id}`, {});
  }
  unlikeBlog(id: any) {
    return this.http.patch(`${this.url}dislike/${id}`, {});
  }
  commentBlog(id: any, body: any) {
    return this.http.patch(`${this.url}comment/${id}`, body);
  }
  deleteComment(id: any, commentid: any) {
    return this.http.delete(`${this.url}${id}/comment/${commentid}`);
  }
  saveBlog(id: any) {
    return this.http.patch(`${this.url}saveArticle/${id}`, {});
  }
  unsaveBlog(id: any) {
    return this.http.patch(`${this.url}removeSavedArticle/${id}`, {});
  }
  deleteBlog(id: any) {
    return this.http.delete(`${this.url}delete/${id}`);

  }
}
