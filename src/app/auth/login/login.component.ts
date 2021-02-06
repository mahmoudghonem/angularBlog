import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsernameValidator } from 'src/app/helpers/validators/UsernameValidator';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin!: boolean;
  errorMsg: string = 'Invalid username and/or password.';
  eMsg!: string;

  loginForm = new FormGroup({
    'username': new FormControl('', [
      Validators.required,
      UsernameValidator.cannotContainSpace,
      Validators.minLength(8),
      Validators.maxLength(140),
    ]),
    'password': new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  })
  constructor(private userService: UserService) { }

  ngOnInit(): void {

  }
  get username() { return this.loginForm.get('username') }
  get password() { return this.loginForm.get('password') }


  signIn(body: any) {
    this.userService.login(body)
      .subscribe((result: any) => {
        this.userService.user=result;
        localStorage.setItem('token', result.token);
      }, (e) => {
        this.eMsg = e.error.message;
        if (this.eMsg == 'WRONG_USERNAME') {
          this.errorMsg = 'Invalid username';
        } else if (this.eMsg == 'WRONG_PASSWORD') {
          this.errorMsg = 'Invalid password';
        }
        this.invalidLogin = true;
      });
  }

}
