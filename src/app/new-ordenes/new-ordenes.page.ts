import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Ordenes, OrdenesService } from '../services/ordenes.service';

@Component({
  selector: 'app-new-ordenes',
  templateUrl: './new-ordenes.page.html',
  styleUrls: ['./new-ordenes.page.scss'],
})
export class NewOrdenesPage implements OnInit {
  ordenes: Ordenes[];

  constructor(
    private service: OrdenesService,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.service.getAll().subscribe(responseP => {
      this.ordenes = responseP;
    });
  }

  closeModal(){
    this.modalCtrl.dismiss(null, 'closed');
  }

}
