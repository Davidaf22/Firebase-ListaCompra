import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {ListaProductosComponent} from './lista-productos/lista-productos.component';

@Injectable({
  providedIn: 'root'
})
export class FireDBService {

  constructor(public db: AngularFireDatabase) { }
  user = null;
  altausuario(user: any) {
    const path = 'usuarios/' + user.uid + '/Datos';
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
  addProducto(user: any, nombre , descripcion){
    const path = 'usuarios/' + user.uid + '/' + nombre;
    const u = {
      Descripcion: descripcion
    }
    this.db.object(path).update(u).catch(error => console.log(error));
    console.log('Insertado producto ' , nombre);
  }
  borrarProducto(user: any, nombre){
    const path = 'usuarios/' + user.uid + '/' + nombre;
    this.db.object(path).remove();
    console.log('Producto usuario ' , nombre);
  }
  leerProductos(user: any) {
    const path = 'usuarios/' + user.uid;
    return this.db.list(path).snapshotChanges();
  }
}
