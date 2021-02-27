import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/userModel';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-authordetail',
  templateUrl: './authordetail.component.html',
  styleUrls: ['./authordetail.component.css'],
})
export class AuthordetailComponent implements OnInit {
  loadedData: boolean = true;
  myImgUrl: string = 'assets/defaultPP.jpg';
  userId!: string;
  user!: User;
  sameUser: Boolean = true;
  isAUser: boolean = false;
  isFollowing: boolean = false;
  currentUser!: any;

  constructor(private userService: UserService, private ar: ActivatedRoute) {
    this.userId = this.ar.snapshot.paramMap.get('id') ?? '';
    if (this.userService.currentUser) {
      this.currentUser = this.userService.currentUser;
      this.isAUser = true;
      if (this.currentUser.id === this.userId) {
        this.sameUser = true;
      } else {
        this.sameUser = false;
      }
    }
  }

  ngOnInit(): void {

      this.checkFollowing(this.userId);
      this.userService.getUserById(this.userId).subscribe(
        (result: any) => {
          this.user = result;
          this.loadedData = false;
        },
        (e) => {
          console.log(e);
        }
      );
  }

  checkFollowing(id: any) {
    this.userService.checkFollowing(id).subscribe(
      (result: any) => {
        if (result == true) {
          this.isFollowing = true;
        } else {
          this.isFollowing = false;
        }
      },
      (e) => {
        console.log(e);
      }
    );
  }
  followUser() {
    this.userService.follow(this.user._id).subscribe(
      (result) => {
        this.isFollowing = true;
      },
      (e) => {
        console.log(e);
      }
    );
  }
  unFollowUser() {
    this.userService.unFollow(this.user._id).subscribe(
      (result) => {
        this.isFollowing = false;
      },
      (e) => {
        console.log(e);
      }
    );
  }
}
