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
    const pruducto6 = {
      nombre: 'Donuts',
      descripcion: 'Pasel con forma circular normalmente recubierto de chocolate',
      comprado: false,
    };
    const pruducto7 = {
      nombre: 'M&M',
      descripcion: 'Cacahuetes recubiertos de chocolate con otro recubrimiento exterior de caramelo.',
      comprado: false,
    };
    const pruducto8 = {
      nombre: 'Galletas',
      descripcion: 'Bolletia realizado en el horno',
      comprado: false,
    };
    const pruducto9 = {
      nombre: 'Solomillo',
      descripcion: 'Pieza de carne que ',
      comprado: false,
    };
    const pruducto10 = {
      nombre: 'Chorizo ',
      descripcion: 'Alimento realizado a base de sobras de las demas piezas de carne.',
      comprado: false,
    };
    this.productos = [];
    this.productos.push(pruducto1);
    this.productos.push(pruducto2);
    this.productos.push(pruducto3);
    this.productos.push(pruducto4);
    this.productos.push(pruducto5);
    this.productos.push(pruducto6);
    this.productos.push(pruducto7);
    this.productos.push(pruducto8);
    this.productos.push(pruducto9);
    this.productos.push(pruducto10);
  }
  ngOnInit() {
  }

  onClickMe(i) {
    this.productos[i].comprado = true;
  }
  onClickMe2(i) {
    this.productos[i].comprado = false;
  }
}
