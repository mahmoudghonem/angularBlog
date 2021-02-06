import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar-sign',
  templateUrl: './navbar-sign.component.html',
  styleUrls: ['./navbar-sign.component.css']
})
export class NavbarSignComponent implements OnInit {
  username!: string;
  constructor(private userService: UserService) {
    this.username = this.userService.currentUser.username;
  }

  ngOnInit(): void {
  }
  logout() {
    this.userService.logout();
  }
}
