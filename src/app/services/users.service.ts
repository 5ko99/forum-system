import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/Rx';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


// From here to get to db o work with users
@Injectable()
export class UsersService {
  user: Observable<firebase.User>;
  public authInfo = new BehaviorSubject<firebase.UserInfo>(undefined);
  constructor(private db: AngularFireDatabase, public afAuth: AngularFireAuth) {
    this.afAuth.auth.onAuthStateChanged(authInfo => this.authInfo.next(authInfo));
  }

  login(email: string, password: string): firebase.Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logout(): firebase.Promise<any> {
    return this.afAuth.auth.signOut();
  }

  register(email: string, password: string, username: string): firebase.Promise<any> {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password).then((user) => {
      writeUserData(user.uid, username, email);
    });

    function writeUserData(userId, _name, _email): void {
      firebase.database().ref('/users/' + userId).set({
        username: _name,
        email: _email,
      });
    }
  }
}
