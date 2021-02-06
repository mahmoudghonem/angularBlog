import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-unsign',
  templateUrl: './navbar-unsign.component.html',
  styleUrls: ['./navbar-unsign.component.css']
})
export class NavbarUnsignComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  login() {
    this.router.navigate(["login"]);
  }
  register() {
    this.router.navigate(["register"]);
  }
}
