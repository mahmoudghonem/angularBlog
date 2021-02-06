import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsernameValidator } from 'src/app/helpers/validators/UsernameValidator';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  invalidRegister!: boolean;
  usernameTaken!: boolean;
  emailTaken!: boolean;
  errorMsg: string = 'Invalid username and/or password.';
  eMsg!: string;
  regForm = new FormGroup({
    'username': new FormControl('', [
      Validators.required,
      UsernameValidator.cannotContainSpace,
      Validators.minLength(8),
      Validators.maxLength(140),
    ]),
    'firstname': new FormControl('', [
      Validators.required,
      Validators.maxLength(140),
    ]),
    'lastname': new FormControl('', [
      Validators.required,
      Validators.maxLength(140),
    ]),
    'email': new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
    ]),
    'password': new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  })
  constructor(private userService: UserService) { }
  ngOnInit(): void {
  }
  get username() { return this.regForm.get('username') }
  get firstname() { return this.regForm.get('firstname') }
  get lastname() { return this.regForm.get('lastname') }
  get email() { return this.regForm.get('email') }
  get password() { return this.regForm.get('password') }

  register(body: any) {
    this.userService.register(body)
      .subscribe((result: any) => {

      }, (e) => {
        this.invalidRegister = true;
        this.eMsg = e.error.message;
        if (this.eMsg == 'USERNAME_TAKEN') {
          this.errorMsg = `username ${body.username} is taken`;
        } else if (this.eMsg == 'EMAIL_REGISTERED') {
          this.errorMsg = `${body.email} is already registered`;
        }
      });
  }
  checkUsername(body: any) {
    this.userService.usernameCheck(body).subscribe((result: any) => {
      this.usernameTaken = false;
    }, (e) => {
      this.eMsg = e.error.message;
      if (this.eMsg == 'USERNAME_TAKEN') {
        this.errorMsg = `username ${body.username} is taken`;
        this.usernameTaken = true;
      }
    });
  }
  checkEmail(body: any) {
    this.userService.emailCheck(body).subscribe((result: any) => {
      this.emailTaken = false;
    }, (e) => {
      this.eMsg = e.error.message;
      if (this.eMsg == 'EMAIL_REGISTERED') {
        this.errorMsg = `${body.email} is already registered`;
        this.emailTaken = true;
      }
    });
  }
}
