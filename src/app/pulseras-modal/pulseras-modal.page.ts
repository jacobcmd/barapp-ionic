import { Component, OnInit } from '@angular/core';
import { Pulseras, PulserasService } from '../services/pulseras.service';

@Component({
  selector: 'app-pulseras-modal',
  templateUrl: './pulseras-modal.page.html',
  styleUrls: ['./pulseras-modal.page.scss'],
})
export class PulserasModalPage implements OnInit {
  pulseras: Pulseras[];

  constructor(private service: PulserasService) { }

  ngOnInit() {
    this.service.getAll().subscribe(response => {
      this.pulseras = response;
    })
  }

}
