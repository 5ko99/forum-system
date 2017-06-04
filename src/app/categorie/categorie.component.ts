import { HomeComponent } from '../home/home.component';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { SharedService } from './../services/shared.service';
import { DataService } from './../services/data.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  // TODO: Get Topics from firebase depends on the clickedCategorie
  private topics: string[] = [];
  clickedCategorie: Observable<UrlSegment[]>;
  constructor(private route: ActivatedRoute, private sharedService: SharedService, private router: Router,
    private dataService: DataService) {
  }

  // Get object with information abbout clicked categorie
  ngOnInit() {
    this.clickedCategorie = this.route.url;
    this.clickedCategorie.subscribe((url) => {
      const data = this.dataService.getDataList('/categories/' + url[0].path);
      data.subscribe((snapshot) => {
        // snapshot.lenght - 1 because the last is the categorie name !!Look Firebase!!
        for (let i = 0; i < snapshot.length - 1; i++) {
          this.topics[i] = snapshot[i].topicTitle;
        }
      });
    });
  }

  onSelect(topic: string) {
    this.sharedService.selectedTopic = topic;
    this.router.navigate(['/topic/1']);
  }

}
