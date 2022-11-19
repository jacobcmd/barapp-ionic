import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewProductosPage } from './new-productos/new-productos.page';
import { NewPulserasPage } from './new-pulseras/new-pulseras.page';
import { NewOrdenesPage } from './new-ordenes/new-ordenes.page';
import { OrdenesModalPage } from './ordenes-modal/ordenes-modal.page';

@NgModule({
  declarations: [AppComponent, NewProductosPage, NewPulserasPage, NewOrdenesPage, OrdenesModalPage],
  entryComponents: [NewProductosPage, NewPulserasPage, NewOrdenesPage, OrdenesModalPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
