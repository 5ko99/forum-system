import { NgForm } from '@angular/forms';
import { environment } from '../../environments/environment';
import { Component, OnInit, Input, } from '@angular/core';
import { SharedService } from './../services/shared.service';
import { UsersService } from './../services/users.service';



@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {
  constructor(private sharedService: SharedService, private userService: UsersService) { }

  ngOnInit() {
    // console.log(this.userService.isLogged());
  }

  signIn() {
    this.sharedService.signIn = true;
  }

  onSubmit(myForm: NgForm): boolean {
    const email: string = myForm.form.value.email;
    const password: string = myForm.form.value.pass;
    if (this.sharedService.signIn) {
      // Login Part
      this.userService.login(email, password).then((user) => {
        return true;
      }).catch((err) => {
        console.log(err.message);
      });
    } else {
      // Register Part
      const username: string = myForm.form.value.username;
      this.userService.register(email, password, username).then((user) => {
        return true;
      }).catch((err) => {
        // Get error
        console.log(err.message);
      });
    }
    return false;
  }

}
