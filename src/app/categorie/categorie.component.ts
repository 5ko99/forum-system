import { HomeComponent } from '../home/home.component';
import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, UrlSegment, Router} from '@angular/router';
import {Observable} from 'rxjs/Rx';
import {SharedService} from './../services/shared.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  // TODO: Get Topics from firebase depends on the clickedCategorie
  private topics: string[] = ['how to fix it', 'problem with my pc'];
  clickedCategorie: Observable<UrlSegment[]>;
  constructor(private route: ActivatedRoute, private sharedService: SharedService, private router: Router) {
  }

  // Get object with information abbout clicked categorie
  ngOnInit() {
    this.clickedCategorie = this.route.url;
  }

  onSelect(topic: string) {
    this.sharedService.selectedTopic = topic;
    this.router.navigate(['/topic/1']);
  }

}
