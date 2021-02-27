import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/userModel';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar-sign',
  templateUrl: './navbar-sign.component.html',
  styleUrls: ['./navbar-sign.component.css']
})
export class NavbarSignComponent implements OnInit {
  username!: string;
  user: User = new User;
  myImgUrl: string = 'assets/defaultPP.jpg';
  searchForm = new FormGroup({
    'search': new FormControl('', [
      Validators.required,
    ])
  });
  constructor(private userService: UserService, private router: Router) {
    this.userService.getMe().subscribe((r: any) => {
      this.user = r;
    })
    this.username = this.userService.currentUser.username ?? "username";
  }
  get searchTxt() { return this.searchForm.get('search') }

  ngOnInit(): void {
  }
  search(t: string) {
    if (t && !(t == ' ')) {
      this.router.navigate(['']).then((r)=>{
        this.router.navigate(['search', t]);
      });
    }
  }

  navToProfile(){
    this.router.navigate(['profile/',this.user._id]);

  }
  navTohome() {
    this.router.navigate(['']);
  }
  logout() {
    this.userService.logout();
  }
}
