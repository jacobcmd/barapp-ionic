import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'pulseras-modal',
    loadChildren: () => import('./pulseras-modal/pulseras-modal.module').then( m => m.PulserasModalPageModule)
  },
  {
    path: 'productos-modal',
    loadChildren: () => import('./productos-modal/productos-modal.module').then( m => m.ProductosModalPageModule)
  },
  {
    path: 'ordenes-modal',
    loadChildren: () => import('./ordenes-modal/ordenes-modal.module').then( m => m.OrdenesModalPageModule)
  },
  {
    path: 'new-productos',
    loadChildren: () => import('./new-productos/new-productos.module').then( m => m.NewProductosPageModule)
  },
  {
    path: 'new-pulseras',
    loadChildren: () => import('./new-pulseras/new-pulseras.module').then( m => m.NewPulserasPageModule)
  },
  {
    path: 'new-ordenes',
    loadChildren: () => import('./new-ordenes/new-ordenes.module').then( m => m.NewOrdenesPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
