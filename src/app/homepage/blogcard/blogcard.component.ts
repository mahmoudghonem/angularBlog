import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/blogModel';

@Component({
  selector: 'app-blogcard',
  templateUrl: './blogcard.component.html',
  styleUrls: ['./blogcard.component.css']
})
export class BlogcardComponent implements OnInit {
  @Input() article!: Article;
  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

  navigateToDetails() {  
    this.router.navigate(['article/', this.article._id])
  }
}
