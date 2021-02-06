import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/blogModel';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-publicblogs',
  templateUrl: './publicblogs.component.html',
  styleUrls: ['./publicblogs.component.css']
})
export class PublicblogsComponent implements OnInit {
  articles!: Article[];
  isLoadedData: boolean = false;
  currentPage: number = 1;
  totalPage!: number;
  limit: number = 9;
  myImgUrl: string = 'assets/defaultBlogP.jpg';
  constructor(private articleService: BlogService) {
    this.isLoadedData = true;
  }
  ngOnInit(): void {
    this.articleService.getBlogs(this.currentPage, this.limit).subscribe((result: any) => {
      console.log(result);
      this.totalPage = result.pagingCounter;
      this.articles = result.docs;
      if (this.articles.length == 0)
        this.isLoadedData = true
      else
        this.isLoadedData = false

      console.log(this.articles);
    }, (e) => {
      console.log(e);
    })
  }
  loadPage(page: number) {
    this.articleService.getBlogs(page, this.limit).subscribe((result: any) => {
      console.log(result);
      this.articles = result.docs;
      console.log(this.articles);

    }, (e) => {
      console.log(e);
    })

  }
}
