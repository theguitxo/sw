import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppConfigModule } from './app-config.module';

import { APP_ROUTING } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

import { BuscarComponent } from './components/buscar/buscar.component';
import { CajaBusquedaComponent } from './components/caja-busqueda/caja-busqueda.component';
import { TablaListadoComponent } from './components/tabla-listado/tabla-listado.component';
import { BarraPaginacionComponent } from './components/barra-paginacion/barra-paginacion.component';
import { BotonVolverComponent } from './components/boton-volver/boton-volver.component';

// Fichas de datos
import { FichaComponent } from './components/ficha-datos/ficha.component';
import { FichaDatosComponent } from './components/ficha-datos/ficha-datos.component';
import { PopupInfoComponent } from './components/ficha-datos/popup-info.component';

// Servicios
import { BuscarService } from './services/buscar.service';
import { DataService } from './services/data.service';
import { BuzonService } from './services/buzon.service';

// Pipes
import { OrderByPipe } from './pipes/order.pipe';
import { ExtractoTextoPipe, ListaValoresPipe } from './pipes/text.pipe';
import { FormateaFechasPipe } from './pipes/fechas.pipe';

// Módulos externos
import { LoadingModule } from 'ngx-loading';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BuscarComponent,
    CajaBusquedaComponent,
    TablaListadoComponent,
    BarraPaginacionComponent,
    BotonVolverComponent,
    PopupInfoComponent,
    FichaComponent,
    FichaDatosComponent,
    OrderByPipe,
    ExtractoTextoPipe,
    ListaValoresPipe,
    FormateaFechasPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTING,
    HttpClientModule,
    AppConfigModule,
    LoadingModule
  ],
  providers: [
    DataService,
    BuscarService,
    BuzonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
