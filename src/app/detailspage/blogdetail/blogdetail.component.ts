import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/blogModel';
import { User } from 'src/app/models/userModel';
import { BlogService } from 'src/app/services/blog.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-blogdetail',
  templateUrl: './blogdetail.component.html',
  styleUrls: ['./blogdetail.component.css']
})
export class BlogdetailComponent implements OnInit {
  article: Article = new Article;
  user: User = new User;
  commentPressed: boolean = false;
  id!: string;
  constructor(private route: ActivatedRoute, private blogService: BlogService, private userService: UserService) {
    this.id = this.route.snapshot.paramMap.get('id') ?? '';
    this.blogService.getBlog(this.id).subscribe((result: any) => {
      this.article = result;
      this.userService.getUserById(this.article.userId).subscribe((result: any) => {
        this.user = result;
      }, (e) => {
        console.log(e);
      })
    }, (e) => {
      console.log(e);
    })
  }


  ngOnInit(): void {

  }
  pressComment(a: boolean) {
    this.commentPressed = a;
  }

}
