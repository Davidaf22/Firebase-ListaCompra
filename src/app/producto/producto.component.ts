// @ts-ignore
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  pruducto: any;

  constructor() {
    this.pruducto = {
      nombre: 'Nombre del producto',
      descripcion: 'Descripción del producto',
      comprado: false
    };
  }
  ngOnInit() {
  }
}
