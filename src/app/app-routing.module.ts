import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { FichaDatosComponent } from './components/ficha-datos/ficha-datos.component';

const ROUTES: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'buscar/:tipo',
    component: BuscarComponent
  },
  {
    path: 'ficha/:tipo',
    component: FichaDatosComponent
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);
