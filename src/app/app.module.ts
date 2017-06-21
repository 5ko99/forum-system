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
import {Autosize} from '../../node_modules/angular2-autosize/angular2-autosize';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AskComponent } from './ask/ask.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'categorie',  children: [
      { path: '', redirectTo: 'web', pathMatch: 'full' },
      { path: 'Web Development', component: CategorieComponent},
      { path: 'Web Development/:id', component: TopicComponent},
      { path: 'Net', component: CategorieComponent },
      { path: 'Net/:id', component: TopicComponent }
    ]},
    {path: 'sign', component: SignComponent},
    {path: 'questions/ask', component: AskComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategorieComponent,
    SignComponent,
    TopicComponent,
    AskComponent,
    Autosize
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
