import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { SharedService } from './services/shared.service';
import { UsersService } from './services/users.service';
import { Observable } from 'rxjs/Rx';
import * as firebase from 'firebase/auth';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  authInfo: Observable<firebase.UserInfo>;
  header = 'Forum';
  logged = false;
  constructor(private sharedService: SharedService, private userService: UsersService) {
    this.authInfo = this.userService.authInfo;
  }

  signUp() {
    this.sharedService.signIn = false;
  }

  ngOnInit() {
    this.authInfo.subscribe((snapshot) => {
      // Check if the user is loged and if is change the button
      if (snapshot) {
        this.logged = true;
      }
    });
  }

  logOut() {
    this.userService.logout().then((data) => {
      // Successuful LogOuted
      this.logged = false;
    }, (err) => {
      console.log(err.message);
    });
  }
}
