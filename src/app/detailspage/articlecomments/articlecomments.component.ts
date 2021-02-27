import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Article } from 'src/app/models/blogModel';
import { Comment } from 'src/app/models/commentModel';
import { BlogService } from 'src/app/services/blog.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-articlecomments',
  templateUrl: './articlecomments.component.html',
  styleUrls: ['./articlecomments.component.css']
})
export class ArticlecommentsComponent implements OnInit, OnChanges {
  @Input('article') article!: Article;
  comments!: Comment[];
  loadedData: Boolean = true;
  isClicked: Boolean = false;
  isUser!: any;
  isAUser: boolean = false;
  myImgUrl: string = 'assets/defaultPP.jpg';

  commentForm = new FormGroup({
    'comment': new FormControl('', [
      Validators.required,
    ]),
  });
  constructor(private blogService: BlogService, private userService: UserService) {
    if (this.userService.currentUser) {
      this.isUser = this.userService.currentUser.id;
      this.isAUser = true;
    }
  }
  get comment() { return this.commentForm.get('comment') }

  ngOnInit(): void {

  }
  ngOnChanges(): void {

    if (Object.keys(this.article).length !== 0) {
      this.loadedData = false;
      this.blogService.getBlog(this.article._id).subscribe((result: any) => {
        this.comments = result.comments;
        this.comments.sort((a, b) => (a.createdAt < b.createdAt) ? 1 : -1)
        for (let item of this.comments) {
          item.tempPP = this.getPP(item.userId);
        }
      }, (e) => {
        console.log(e);
      });
    }
  }
  postComment(body: any) {
    this.blogService.commentBlog(this.article._id, body).subscribe((result) => {
      this.comment?.setValue('');
      this.ngOnChanges();

    }, (e) => {
      console.log(e);

    })
  }
  deleteComment(commentid: any) {
    this.blogService.deleteComment(this.article._id, commentid).subscribe((result: any) => {
      let index = this.comments.findIndex((a) => a._id === commentid);
      this.comments.splice(index, 1);
    }, (e) => {
      console.log(e);
    })
  }
  getPP(userId: string): any {
    this.userService.getUserById(userId).subscribe((result: any) => {
      return result.profilePhoto;
    }, (e) => {
      return null;
    })
  }

}
