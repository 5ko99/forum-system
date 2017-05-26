import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CategorieComponent } from './categorie/categorie.component';
import { SignComponent } from './sign/sign.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'categorie',  children: [
      { path: '', redirectTo: 'web', pathMatch: 'full' },
      { path: 'Web Development', component: CategorieComponent },
      { path: '.Net', component: CategorieComponent }
    ]},
    {path: 'sign', component: SignComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategorieComponent,
    SignComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
