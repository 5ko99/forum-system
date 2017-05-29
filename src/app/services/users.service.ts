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
      firebase.database().ref('users/' + userId).set({
        username: _name,
        email: _email,
      });
    }
  }

  getCurrnetUser(): firebase.User {
    return this.afAuth.auth.currentUser;
  }

  getUid(): string {
    return this.afAuth.auth.currentUser.uid;
  }

  getName(): string {
    return this.afAuth.auth.currentUser.displayName;
  }

  getEmail(): string {
    return this.afAuth.auth.currentUser.email;
  }

  // Function that checks if the user is logged or not- Check evry time before access user data
  isLogged(): boolean {
    const user: firebase.User = this.afAuth.auth.currentUser;
    if (user) {
      return true;
    } else {
      return false;
    }
  }
}
