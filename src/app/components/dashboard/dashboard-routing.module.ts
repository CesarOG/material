import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { ReporteComponent } from './reporte/reporte.component';
import { FormUsuarioComponent } from './usuario/form-usuario/form-usuario.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      { path: '', component: InicioComponent },
      { path: 'usuario', component: UsuarioComponent },
      { path: 'reporte', component: ReporteComponent },
      { path: 'form-usuario', component: FormUsuarioComponent },
      { path: 'form-usuario/:id', component: FormUsuarioComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
