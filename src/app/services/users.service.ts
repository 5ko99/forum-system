import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


// From here to get to db o work with users
@Injectable()
export class UsersService {
  user: Observable<firebase.User>;

  constructor(db: AngularFireDatabase, public afAuth: AngularFireAuth) {
  }

  login(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password).catch((err) => {
      return err;
    });
  }

  logout(): void {
    this.afAuth.auth.signOut();
  }

  register(email: string, password: string, username: string): void {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password).then((user) => {
      writeUserData(user.uid, username, email);
    }).catch((err) => {
      console.log(err.message);
    });

    function writeUserData(userId, _name, _email): void {
      firebase.database().ref('users/' + userId).set({
        username: _name,
        email: _email,
      });
    }
  }

  getCurrnetUser(): Observable<firebase.User> {
    return this.user = this.afAuth.authState;
  }

  getUid(): string {
    return this.afAuth.auth.currentUser.uid;
  }

  getName(): string {
    return this.afAuth.auth.currentUser.displayName;
  }

  getEmail() {
    return this.afAuth.auth.currentUser.email;
  }

  isAnonymus() {
    return this.afAuth.auth.currentUser.isAnonymous;
  }

}
