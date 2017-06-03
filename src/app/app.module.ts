import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CategorieComponent } from './categorie/categorie.component';
import { SignComponent } from './sign/sign.component';
import { TopicComponent } from './topic/topic.component';
import {SharedService} from './services/shared.service';
import {UsersService} from './services/users.service';
import {DataService} from './services/data.service';


// Firebase
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'categorie',  children: [
      { path: '', redirectTo: 'web', pathMatch: 'full' },
      { path: 'Web Development', component: CategorieComponent },
      { path: '.Net', component: CategorieComponent }
    ]},
    {path: 'sign', component: SignComponent},
    {path: 'topic/:id', component: TopicComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategorieComponent,
    SignComponent,
    TopicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule // imports firebase/auth, only needed for auth features
  ],
  providers: [SharedService, UsersService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
