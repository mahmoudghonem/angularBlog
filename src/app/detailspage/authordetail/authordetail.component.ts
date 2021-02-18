import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { User } from 'src/app/models/userModel';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-authordetail',
  templateUrl: './authordetail.component.html',
  styleUrls: ['./authordetail.component.css']
})
export class AuthordetailComponent implements OnInit, OnChanges {
  @Input('user') user!: User;
  sameUser: Boolean = true;
  constructor(private userService: UserService) {

  }
  ngOnChanges(): void {
    if (Object.keys(this.user).length !== 0) {
      if (this.userService.currentUser.id === this.user._id) {
        console.log(true);
        this.sameUser = true;
      } else {
        this.sameUser = false;

      }
    }
  }

  ngOnInit(): void {
  }

}
