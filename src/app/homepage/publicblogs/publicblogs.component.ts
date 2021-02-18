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
  isLoadedData: boolean = true;
  noData: boolean = false;
  currentPage: number = 1;
  totalPage!: number;
  totalDocs!: number;
  limit: number = 9;
  myImgUrl: string = 'assets/defaultBlogP.jpg';
  constructor(private articleService: BlogService) {
  }
  ngOnInit(): void {
    this.articleService.getBlogs(this.currentPage, this.limit).subscribe((result: any) => {      
      this.totalPage = result.totalPages;
      this.totalDocs = result.totalDocs;
      this.articles = result.docs;
      if (this.articles.length === 0) {
        this.isLoadedData = false
        this.noData = true;
      } else {
        this.isLoadedData = false
        this.noData = false;
      }
    }, (e) => {
      console.log(e);
    })
  }
  loadPage(page: number) {
    this.currentPage = page;

    this.articleService.getBlogs(page, this.limit).subscribe((result: any) => {
      this.articles = result.docs;
    }, (e) => {
      console.log(e);

    })

  }
}
