import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLogin!: boolean;
  constructor(private userService: UserService) {
    this.isLogin = this.userService.loggedIn;    
  }

  ngOnInit(): void {
    this.isLogin = this.userService.loggedIn;    
  }
}
