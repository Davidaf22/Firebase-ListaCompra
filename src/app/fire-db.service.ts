import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {ListaProductosComponent} from './lista-productos/lista-productos.component';

@Injectable({
  providedIn: 'root'
})
export class FireDBService {

  constructor(public db: AngularFireDatabase) { }

  user = null;
  productos = [];

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
  addProducto(user: any, nombre){
    const path = 'usuarios/' + user.uid;
    const u = {
      nombre: 'EnLista'
    }
    this.db.object(path).update(u).catch(error => console.log(error));
    console.log('Insertado producto, dentro de UID');
  }
  borrarProducto(user: any, nombre){
    const path = 'usuarios/' + user.uid + '/' + nombre;
    this.db.object(path).remove();
    console.log('Producto usuario');
  }
  leerProductos(user: any){
    const path = 'usuarios/' + user.uid;
    this.db.list(path).snapshotChanges().subscribe( snap => {
      this.productos = [];
      snap.forEach( u => {
        const clave = u.payload.key;
        const producto = {
          key: clave,
          valor: u.payload.val()
        }
        this.productos.push(producto);
        console.log(u);
      })
      console.log('Productos BD: ', this.productos);
    });
  }
}
