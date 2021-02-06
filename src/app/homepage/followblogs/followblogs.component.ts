import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/blogModel';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-followblogs',
  templateUrl: './followblogs.component.html',
  styleUrls: ['./followblogs.component.css']
})
export class FollowblogsComponent implements OnInit {
  articles!: Article[];
  isLoadedData: boolean = false;
  currentPage: number = 1;
  totalPage!: number;
  limit: number = 6;
  myImgUrl: string = 'assets/defaultBlogP.jpg';
  constructor(private articleService: BlogService) {
    this.isLoadedData = true;
  }

  ngOnInit(): void {
    this.articleService.getFollowBlogs(this.currentPage, this.limit).subscribe((result: any) => {
      this.totalPage = result.pagingCounter;
      this.articles = result.docs;
      if (this.articles.length == 0)
        this.isLoadedData = true
      else
        this.isLoadedData = false

    }, (e) => {
    })
  }
  loadPage(page: number) {
    this.articleService.getFollowBlogs(page, this.limit).subscribe((result: any) => {
      console.log(result);
      this.articles = result.docs;

    }, (e) => {
    })

  }

}
