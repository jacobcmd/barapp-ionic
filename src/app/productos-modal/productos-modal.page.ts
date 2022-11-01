import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Productos, ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-productos-modal',
  templateUrl: './productos-modal.page.html',
  styleUrls: ['./productos-modal.page.scss'],
})
export class ProductosModalPage implements OnInit {
  productos: Productos[];

  constructor(private serviceP: ProductosService, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.serviceP.getAll().subscribe(responseP => {
      this.productos = responseP;
    });
  }

  removeProducto(id: string){
    this.alertCtrl.create({
      header: 'Eliminar',
      message: '¿Estas seguro que quieres eliminar el producto?',
      buttons: [{
        text: 'Si',
        handler: () => {
          this.serviceP.remove(id).subscribe(() => {
            this.productos = this.productos.filter(std => std.id !== id);
          });
        }
      }, 
    { text: 'No' } 
  ]
}).then(alertEl => alertEl.present());
  }

}
