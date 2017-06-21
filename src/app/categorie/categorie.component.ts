import { HomeComponent } from '../home/home.component';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { SharedService } from './../services/shared.service';
import { DataService } from './../services/data.service';
import * as firebase from 'firebase/auth';
import { UsersService } from '.././services/users.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  // TODO: Get Topics from firebase depends on the clickedCategorie
  private snapshots;
  private categorie: string;
  clickedCategorie: Observable<UrlSegment[]>;
  authInfo: Observable<firebase.UserInfo>;
  constructor(private route: ActivatedRoute, private sharedService: SharedService, private router: Router,
    private dataService: DataService, private userService: UsersService) {
      this.authInfo = this.userService.authInfo;
  }

  // Get object with information abbout clicked categorie
  ngOnInit() {
    this.clickedCategorie = this.route.url;
    this.clickedCategorie.subscribe((url) => {
      const data = this.dataService.getDataList('/categories/' + url[0].path);
      this.categorie = url[0].path;
      data.subscribe((snapshot) => {
        this.snapshots = snapshot;
      });
    });
  }

  onSelect(topic) {
    this.router.navigate(['/categorie/' + this.categorie + '/' + topic.$key]); // $key in uid of evry post
  }

  ask(): void {
    this.router.navigate(['/questions/ask']);
  }

}
