import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogin!: boolean;
  constructor(private userService: UserService) {
    this.isLogin = this.userService.loggedIn;    
  }

  ngOnInit(): void {
    this.isLogin = this.userService.loggedIn;    
  }
}
