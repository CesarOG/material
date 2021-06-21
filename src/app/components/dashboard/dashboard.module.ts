import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ReporteComponent } from './reporte/reporte.component';
import { FormUsuarioComponent } from './usuario/form-usuario/form-usuario.component';
import { DetalleUsuarioComponent } from './usuario/detalle-usuario/detalle-usuario.component';


@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NavbarComponent,
    UsuarioComponent,
    ReporteComponent,
    FormUsuarioComponent,
    DetalleUsuarioComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
