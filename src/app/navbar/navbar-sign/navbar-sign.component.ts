import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/userModel';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar-sign',
  templateUrl: './navbar-sign.component.html',
  styleUrls: ['./navbar-sign.component.css']
})
export class NavbarSignComponent implements OnInit {
  username!: string;
  user: User=new User;

  myImgUrl: string = 'assets/defaultPP.jpg';
  constructor(private userService: UserService) {
    this.userService.getMe().subscribe((r: any) => {
      this.user = r;
    })

    this.username = this.userService.currentUser.username;
  }

  ngOnInit(): void {
  }
  logout() {
    this.userService.logout();
  }
}
