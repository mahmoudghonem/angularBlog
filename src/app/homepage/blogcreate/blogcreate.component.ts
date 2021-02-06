import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-blogcreate',
  templateUrl: './blogcreate.component.html',
  styleUrls: ['./blogcreate.component.css']
})
export class BlogcreateComponent implements OnInit {

  postForm = new FormGroup({
    
  });

  constructor() { }

  ngOnInit(): void {
  }

}
