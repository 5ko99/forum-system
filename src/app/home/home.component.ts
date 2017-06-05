import { FirebaseListObservable } from 'angularfire2/database/firebase_list_observable';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SharedService} from './../services/shared.service';
import {DataService} from './../services/data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // Get data from firebase
  private categories: FirebaseListObservable<any>;
  constructor(private router: Router, private sharedService: SharedService, private dataService: DataService) {
    this.categories = this.dataService.getDataList('/categories');
   }

  ngOnInit() {
  }


  // This router naviget to the right sub-categorie
  private onSelect(categorie) {
    this.sharedService.categorieToAks = categorie.categorie;
    this.router.navigate(['/categorie/', categorie.categorie]);
  }

}
