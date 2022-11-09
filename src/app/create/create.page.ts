import { Component } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Pulseras, PulserasService } from '../services/pulseras.service';
import { Productos, ProductosService } from '../services/productos.service';
import { Ordenes, OrdenesService } from '../services/ordenes.service';
import { OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { NewOrdenesPage } from '../new-ordenes/new-ordenes.page';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  pulseras: Pulseras[];
  productos: Productos[];
  ordenes: Ordenes[];
  searchedOrdenes: any;

  constructor(
    private http: HttpClient, 
    private service: PulserasService, 
    private serviceP: ProductosService, 
    private serviceO: OrdenesService,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController
    ) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(response => {
      this.pulseras = response;
    })
    this.serviceP.getAll().subscribe(responseP => {
      this.productos = responseP;
    })
    this.serviceO.getAll().subscribe(responseO => {
      this.ordenes = responseO;
    })
  }

  onCreate() {
    // Do this on service. But for this demo lets do here
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token
    });

    this.http.post(`http://localhost/auth_app/api/create`, 'body', { headers }).subscribe(console.log);
  }

  buscarOrden(event) {
   const text = event.target.value;
   this.searchedOrdenes = this.ordenes;
   if(text && text.trim() != ''){
    this.searchedOrdenes = this.searchedOrdenes.filter((id: any) => {
      this.modalCtrl
    .create({
      component: NewOrdenesPage
    })
    .then(modal => {
      modal.present();
      return modal.onDidDismiss();
    })
    .then(({ data, role }) => {
      if (role === 'created'){
        this.ordenes.push();
      }
    });
    });
   }
  }

}
