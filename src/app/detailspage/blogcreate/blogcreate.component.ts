import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Article } from 'src/app/models/blogModel';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blogcreate',
  templateUrl: './blogcreate.component.html',
  styleUrls: ['./blogcreate.component.css']
})
export class BlogcreateComponent implements OnInit {
  article!: Article;
  state$!: Observable<object>;

  photo!: File;
  isClicked: Boolean = false;
  isEditing: Boolean = false;
  postForm = new FormGroup({
    'title': new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    'body': new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    'tags': new FormControl('', []),
  });

  constructor(private blogService: BlogService, private router: Router) { }


  ngOnInit(): void {
    this.article = history.state.article;
    if (this.article) {
      this.isEditing = true;
      this.title?.setValue(this.article.title);
      this.body?.setValue(this.article.body);
      let tags = this.article.tags.toString().replace(/,/g, ' ');
      this.tags?.setValue(tags);
    }
  }
  get title() { return this.postForm.get('title') }
  get body() { return this.postForm.get('body') }
  get tags() { return this.postForm.get('tags') }

  handleFileInput(event: any) {
    let fileList: FileList = event.target.files;
    this.photo = fileList[0];
  }
  post(body: any) {
    this.isClicked = true;
    const formData = new FormData();
    formData.append('title', body.title);
    formData.append('body', body.body);
    formData.append('tags', body.tags);
    formData.append('image', this.photo);
    this.blogService.createBlog(formData).subscribe((result: any) => {
      this.isClicked = false;
      this.router.navigate(['article/', result._id], { replaceUrl: true })
    }, (e) => {
      console.log(e);
      this.isClicked = false;
    });

  }
  update(body: any) {
    this.isClicked = true;
    const formData = new FormData();
    formData.append('title', body.title);
    formData.append('body', body.body);
    formData.append('tags', body.tags);
    formData.append('image', this.photo);
    this.blogService.updatePost(this.article._id, formData).subscribe((result: any) => {
      this.isClicked = false;
      console.log(result);
      this.router.navigate(['article/', result._id],{ replaceUrl: true })
    }, (e) => {
      console.log(e);
      this.isClicked = false;
    });

  }

}
