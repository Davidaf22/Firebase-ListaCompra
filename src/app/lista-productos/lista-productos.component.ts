import { Component, OnInit } from '@angular/core';
import {ServicioDeAutentService} from '../servicio-de-autent.service';
import {FireDBService} from '../fire-db.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  productos: any[];

  constructor(public authApp: ServicioDeAutentService,
              public dbApp: FireDBService) {
    const pruducto1 = {
      nombre: 'Fairy',
      descripcion: 'Jabon usado para fregar los platos.',
      comprado: false,
    };
    const pruducto2 = {
      nombre: 'Pringles',
      descripcion: 'Patatillas envasadas en recipiente cilindrico',
      comprado: false,
    };
    const pruducto3 = {
      nombre: 'Kalia',
      descripcion: 'Quitamanchas usado lavando la nopa',
      comprado: false,
    };
    const pruducto4 = {
      nombre: 'Chocolate',
      descripcion: 'Producto realizado con base de cacao con leche',
      comprado: false,
    };
    const pruducto5 = {
      nombre: 'Agua',
      descripcion: 'Elemento fundamental en la vida de los seres vivos',
      comprado: false,
    };

    this.productos = [];
    this.productos.push(pruducto1);
    this.productos.push(pruducto2);
    this.productos.push(pruducto3);
    this.productos.push(pruducto4);
    this.productos.push(pruducto5);
  }
  ngOnInit() {
  }

  seTrue(user: any , i) {
    this.productos[i].comprado = true;
    this.dbApp.addProducto(user , this.productos[i].nombre , this.productos[i].descripcion);
  }
  setFalse(user: any , i) {
    this.productos[i].comprado = false;
    this.dbApp.borrarProducto(user , this.productos[i].nombre)
  }

  setValores(user: any) {
    let productosBD = [];
    this.dbApp.leerProductos(user).subscribe( snap => {
      productosBD = [];
      snap.forEach( u => {
        const producto: any = u.payload.val();
        producto.key = u.key;
        productosBD.push(producto.key);
        console.log(producto.key);
        for (const prod in this.productos) {
          if (producto.key === this.productos[prod].nombre) {
            console.log('Aqui cambiamos a true el producto ' , this.productos[prod].nombre);
            this.productos[prod].comprado = true;
          }
        }
      });
    });
  }
}
