import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/blogModel';
import { User } from 'src/app/models/userModel';
import { BlogService } from 'src/app/services/blog.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-articledetail',
  templateUrl: './articledetail.component.html',
  styleUrls: ['./articledetail.component.css']
})
export class ArticledetailComponent implements OnInit, OnChanges {
  loadedData: boolean = true;
  @Input('article') article!: Article;
  @Input('user') user!: User;
  @Output('commentPressed') commentPressed = new EventEmitter();
  sameUser: boolean = true;
  myImgSrc: string = 'assets/defaultBlogP.jpg';
  myImgUrl: string = 'assets/defaultPP.jpg';
  isFollowing: boolean = false;
  isLiked: boolean = false;
  isAUser: boolean = false;
  isSameUser!: string;
  currentUser!: any;
  isCommentPressed: Boolean = false;
  likes!: any;


  constructor(private userService: UserService, private blogService: BlogService, private route: Router) {
    if (this.userService.currentUser) {
      this.currentUser = this.userService.currentUser;
      this.isSameUser = this.userService.currentUser.id;
      this.isAUser = true;
    }
  }
  ngOnInit(): void {

  }
  ngOnChanges(): void {
    if (Object.keys(this.user).length !== 0 && Object.keys(this.article).length !== 0) {
      this.loadedData = false;
      this.likes = this.article.likes;
      if (this.currentUser) {
        this.isLiked = this.likes.some((a: string) => a === this.currentUser.id);
        if (this.currentUser.id === this.user._id) {
          this.sameUser = true;
        } else {
          this.sameUser = false;
          this.checkFollowing(this.user._id);
        }
      }
    }
  }
  checkFollowing(id: any) {
    this.userService.checkFollowing(id).subscribe((result: any) => {
      if (result == true) {
        this.isFollowing = true;
      } else {
        this.isFollowing = false;
      }
    }, (e) => {
      console.log(e);
    })
  }
  followUser() {
    this.userService.follow(this.user._id).subscribe((result) => {
      this.isFollowing = true;
    }, (e) => {
      console.log(e);

    })
  }
  unFollowUser() {
    this.userService.unFollow(this.user._id).subscribe((result) => {
      this.isFollowing = false;
    }, (e) => {
      console.log(e);

    })
  }
  openComments() {
    this.isCommentPressed = !this.isCommentPressed;
    this.commentPressed.emit(this.isCommentPressed);
  }
  like() {
    if (!this.isAUser) {
      this.route.navigate(['login']);
    } else {
      this.blogService.likeBlog(this.article._id).subscribe((result: any) => {
        this.isLiked = true;
        this.article.likes.length++;
      }, (e) => {
        console.log(e);
      });
    }
  }
  unLike() {
    this.blogService.unlikeBlog(this.article._id).subscribe((result: any) => {
      this.isLiked = false;
      this.article.likes.length--;
    }, (e) => {
      console.log(e);
    });
  }
  editPost() {
    this.route.navigateByUrl('/writepost', { state: { article: this.article } });

  }
  deleteArticle() {
    this.blogService.deleteBlog(this.article._id).subscribe((result) => {
      this.route.navigate(['home'], { replaceUrl: true });
    }, (e) => {
      console.log(e);
    })
  }
}
