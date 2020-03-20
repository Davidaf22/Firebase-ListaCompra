import { Component, OnInit } from '@angular/core';
import {ServicioDeAutentService} from '../servicio-de-autent.service';
import {FireDBService} from '../fire-db.service';
import index from '@angular/cli/lib/cli';

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

  onClickMe(i) {
    this.productos[i].comprado = true;
  }
  onClickMe2(i) {
    this.productos[i].comprado = false;
  }
  setValores(productosBD: any){
    const restantes = this.productos.filter(item => productosBD.indexOf(item) < 0);
    console.log(restantes);
  }
}
