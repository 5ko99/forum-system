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
      console.log(this.userService.getEmail());
  }

  signIn() {
    this.sharedService.signIn = true;
  }

  onSubmit(myForm: NgForm) {
    const email: string = myForm.form.value.email;
    const password: string = myForm.form.value.pass;
    if (this.sharedService.signIn) {
      // Login Part
      alert(this.userService.login(email, password));
      console.log(this.userService.getEmail());
    }else {
      // Register Part
      const username: string = myForm.form.value.username;
      this.userService.register(email, password, username);
      console.log(this.userService.getEmail());
    }
  }

}
