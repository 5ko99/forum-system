import { DatabaseSnapshot } from 'angularfire2/interfaces';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

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

  // addBook(title: string, author: string) {
  //   let id;
  //   this.books
  //     .subscribe((snapshot) => {
  //       console.log(snapshot.length);
  //       id = snapshot.length;
  //       return id;
  //     });

  //   console.log('Complete!');
  //   this.db.database.ref('/books/' + id).set({
  //     author: author,
  //     tittle: title
  //   });
  // }
}
