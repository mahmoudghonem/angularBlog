import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/blogModel';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent implements OnInit {
  articles!: Article[];
  isLoadedData: boolean = true;
  noData: boolean = false;
  currentPage: number = 1;
  totalDocs!: number;
  limit: number = 9;
  myImgUrl: string = 'assets/defaultBlogP.jpg';
  searchTxt!: string;
  searchText!: string;
  constructor(private route: ActivatedRoute, private blogService: BlogService) {
    this.searchTxt = this.route.snapshot.paramMap.get('searchtxt') ?? '';
  }

  ngOnInit(): void {
    if (this.searchTxt.startsWith('#')) {
      const tagTxt = this.searchTxt.slice(1).replace(' ', '');
      this.searchText = "Tag " + tagTxt;
      this.getData(tagTxt);
    } else if (this.searchTxt.startsWith('@')) {
      const authorTxt = this.searchTxt.slice(1).replace(' ', '');
      this.getData(undefined, authorTxt);
      this.searchText = "Author " + authorTxt;
    } else {
      this.getData(undefined, undefined, this.searchTxt);
      this.searchText = this.searchTxt;
    }
  }

  getData(tag?: string, author?: string, title?: string) {
    this.blogService.searchBy(tag, author, title).subscribe((result: any) => {
      this.articles = result;
      this.totalDocs = result.lenght;
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

}
