import { NgForm } from '@angular/forms/src/directives';
import { Component, OnInit } from '@angular/core';
import { DataService } from './../services/data.service';
import { SharedService } from '../services/shared.service';
import { Question } from './../models/question.model';
import { FirebaseListObservable } from 'angularfire2/database/firebase_list_observable';

// TODO: Reach this page only if I am logged with one if return to login page if i am not
@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.css']
})
export class AskComponent implements OnInit {
  private categories: FirebaseListObservable<any>;
  constructor(private dataService: DataService, private sharedService: SharedService) {
    this.categories = this.dataService.getDataList('/categories');
  }

  ngOnInit() {
  }

  onSubmit(myForm: NgForm) {
    if (myForm.form.value.selectbasic && myForm.form.value.title && myForm.form.value.postText  && myForm.form.valid ) {
      const categorie: string = myForm.form.value.selectbasic;
      const path = '/categories/' + categorie + '/';
      const userName: string = this.sharedService.loggedUser;
      const title: string = myForm.form.value.title;
      const questionText: string = myForm.form.value.postText;
      const question: Question = new Question(userName, title, questionText);
      this.dataService.writeQuestion(path, question);
    } else {
      alert('Please Select Categorie, enter Title and Text to the question');
    }
  }

}
