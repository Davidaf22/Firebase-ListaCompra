import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FireDBService {

  constructor(public db: AngularFireDatabase) { }

  user = null;

  altausuario(user: any) {
    const path = 'usuarios/' + user.uid;
    const u = {
      email: user.email
    }
    this.db.object(path).update(u).catch(error => console.log(error));
    console.log('Insertado email, dentro de UID');
  }
  bajausuario(user: any) {
    const path = 'usuarios/' + user.uid;
    this.db.object(path).remove();
    console.log('Borramos usuario');
  }
}
