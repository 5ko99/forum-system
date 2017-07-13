import { NgForm } from '@angular/forms';
import { environment } from '../../environments/environment';
import { Component, OnInit, Input, } from '@angular/core';
import { SharedService } from './../services/shared.service';
import { UsersService } from './../services/users.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {
  constructor(private sharedService: SharedService, private userService: UsersService, private router: Router) { }

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
        // Logged
        this.router.navigate(['/home']);
      }).catch((err) => {
        alert('Wrong password or E-Mail!');
      });
    } else {
      // Register Part
      const username: string = myForm.form.value.username;
      this.userService.register(email, password, username).then((user) => {
        // Registered
        this.router.navigate(['/home']);
      }).catch((err) => {
        // Get error
        alert(err.message);
      });
    }
    return false;
  }

}
