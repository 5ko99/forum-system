import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import {SharedService} from './services/shared.service';
import {UsersService} from './services/users.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  header = 'Forum';
  constructor(private sharedService: SharedService,  private userService: UsersService) {
  }

  signUp() {
    this.sharedService.signIn = false;
  }

  ngOnInit() {
    // console.log(this.userService.isAnonymus());
  }
}
