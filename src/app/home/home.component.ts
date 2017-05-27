import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // TODO: Get data from firebase
  private categories: string[] = ['Web Development', '.Net'];
  constructor(private router: Router) { }

  ngOnInit() {
  }


  // This router naviget to the right sub-categorie
  private onSelect(categorie: string) {
    this.router.navigate(['/categorie/', categorie]);
  }

}
