import { Question } from '../models/question.model';
import { Comment } from '../models/comment.model';
import { DatabaseSnapshot } from 'angularfire2/interfaces';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Generator } from 'firebase-auto-ids';

@Injectable()
export class DataService {
  constructor(private db: AngularFireDatabase) {
  }

  public getData(path: string): FirebaseObjectObservable<any> {
    return this.db.object(path);
  }

  public getDataList(path: string): FirebaseListObservable<any> {
    return this.db.list(path);
  }

  public writeQuestion(path: string, question: Question): void {
    const generator: Generator = new Generator();
    path += generator.generate(Date.now());
    const itemObservable = this.db.object(path);
    itemObservable.set({
      author: question.getAuthor(),
      title: question.getTitle(),
      text: question.getText(),
      date: question.getDate()
    });
    const item1Observable = this.db.object('/users/');
  }

  public writeAnswer(path: string, question: Comment): void {
    const generator: Generator = new Generator();
    path += generator.generate(Date.now());
    console.log(question.getDate());
    const itemObservable = this.db.object(path);
    itemObservable.set({
      author: question.getAuthor(),
      text: question.getText(),
      date: question.getDate().toString()
    });
  }

  public deleteQuestion(questionPath: string): firebase.Promise<void> {
    const itemObservable = this.db.object(questionPath);
    return itemObservable.remove();
  }
}
