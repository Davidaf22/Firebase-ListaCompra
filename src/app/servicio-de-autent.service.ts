import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase';
import {AngularFireDatabase} from '@angular/fire/database';
import {FireDBService} from './fire-db.service';

@Injectable({
  providedIn: 'root'
})
export class ServicioDeAutentService {

  email = '';
  pass = '';
  authUser = null;

  constructor(public miauth: AngularFireAuth,
              public dbApp: FireDBService) { }

  user = this.miauth.authState;

  login() {
    console.log('github login!');
    this.miauth.auth.signInWithPopup( new auth.GithubAuthProvider() )
      .then( user => {
        console.log('user logado: ', user);
        this.authUser = user.user;
      })
      .catch( error => {
        console.log('error en google login: ', error);
      });
  }
  glogin() {
    console.log('google login!');
    this.miauth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then(user => {
        this.authUser = user.user;
        console.log('this.authUser: ', this.authUser);
      })
      .catch(error => console.log(error));
  }
  logout() {
    console.log('logout!');
    this.miauth.auth.signOut();
  }

}
