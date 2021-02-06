import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {


  constructor(protected router: Router, protected userService: UserService) { }

  canActivate() {
    if (this.userService.loggedIn) return true;

    this.router.navigate(['/login']);
    return false;
  }
}
