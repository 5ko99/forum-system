import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // Get data from firebase
  private categories: string[] = ['Web Development', '.Net'];
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }


  // This router naviget to the right sub-categorie
  private onSelect(categorie: string) {
    this.router.navigate(['/categorie/', categorie]);
  }

}