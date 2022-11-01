import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Pulseras, PulserasService } from '../services/pulseras.service';

@Component({
  selector: 'app-pulseras-modal',
  templateUrl: './pulseras-modal.page.html',
  styleUrls: ['./pulseras-modal.page.scss'],
})
export class PulserasModalPage implements OnInit {
  pulseras: Pulseras[];

  constructor(private service: PulserasService, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.service.getAll().subscribe(response => {
      this.pulseras = response;
    })
  }

  removePulsera(id: string){
    this.alertCtrl.create({
      header: 'Eliminar',
      message: '¿Estas seguro que quieres eliminar la pulsera?',
      buttons: [{
        text: 'Si',
        handler: () => {
          this.service.remove(id).subscribe(() => {
            this.pulseras = this.pulseras.filter(std => std.id !== id);
          });
        }
      }, 
    { text: 'No' } 
  ]
}).then(alertEl => alertEl.present());
  }

}
