import { environment } from '../../environments/environment';
import { Component, OnInit, Input,  } from '@angular/core';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {
  @Input() login: boolean;
  constructor() { }

  ngOnInit() {
    this.login = false;
  }

  signIn() {
    this.login = true;
  }

}
