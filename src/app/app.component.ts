import { FirebaseObjectObservable } from 'angularfire2/database/firebase_object_observable';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { SharedService } from './services/shared.service';
import { UsersService } from './services/users.service';
import { Observable } from 'rxjs/Rx';
import * as firebase from 'firebase/auth';
import { DataService } from './services/data.service';
import { FirebaseListObservable } from 'angularfire2/database/firebase_list_observable';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  authInfo: Observable<firebase.UserInfo>;
  header = 'Forum';
  logged = false;
  userInfo: FirebaseObjectObservable<any>;
  private categories: FirebaseListObservable<any>;
  constructor(private sharedService: SharedService, private userService: UsersService, private dataService: DataService,
  private router: Router) {
    this.authInfo = this.userService.authInfo;
    this.categories = this.dataService.getDataList('/categories');
  }

  signUp() {
    this.sharedService.signIn = false;
  }

  ngOnInit() {
    this.authInfo.subscribe((snapshot) => {
      // Check if the user is loged and if is change the button
      if (snapshot) {
        const uid = snapshot.uid;
        this.userInfo = this.dataService.getData('/users/' + uid);
        this.userInfo.subscribe((snapshot2) => {
          this.sharedService.loggedUser = snapshot2.username;
          this.sharedService.loggedUserUID = uid;
        });
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

   // This router naviget to the right sub-categorie
  private onSelect(categorie) {
    this.sharedService.categorieToAks = categorie.$key;
    this.router.navigate(['/categorie/', categorie.$key]);
  }
}
