import { Component, OnInit } from '@angular/core';
import { Productos, ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-productos-modal',
  templateUrl: './productos-modal.page.html',
  styleUrls: ['./productos-modal.page.scss'],
})
export class ProductosModalPage implements OnInit {
  productos: Productos[];

  constructor(private serviceP: ProductosService) { }

  ngOnInit() {
    this.serviceP.getAll().subscribe(responseP => {
      this.productos = responseP;
    })
  }

}
