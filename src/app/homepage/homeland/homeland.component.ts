import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-homeland',
  templateUrl: './homeland.component.html',
  styleUrls: ['./homeland.component.css']
})
export class HomelandComponent implements OnInit {
  isLogin!: boolean;
  constructor(private userService: UserService) {
    this.isLogin = this.userService.loggedIn;    
  }

  ngOnInit(): void {
    this.isLogin = this.userService.loggedIn;    
  }
}
