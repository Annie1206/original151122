import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { ReportsComponent } from './reports/reports.component';
import { CreateRoleComponent } from './users/create-role/create-role.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { UsersComponent } from './users/users.component';
import { FreeComponent } from './freelance/freelance.component';
import { configuracionComponent } from './configuracion/configuracion.component';
import { FijoComponent } from './fijo/fijo.component';
import { CrearUsuarioComponent } from './fijo/crear-usuario/crear-usuario.component';
import { TasaComponent } from './tasa/tasa.component';
import { PdfComponent } from './pdf/pdf.component';
import { BeneficiosComponent } from './beneficios/beneficios.component';
import { VistaPrestacionesComponent } from './vista-prestaciones/vista-prestaciones.component';


const routes: Routes = [
  { path: '', component: DashboardComponent, children:[
    { path: '', component: InicioComponent},
    { path: 'users', component: UsersComponent},
    { path: 'create-user', component: CreateUserComponent},
    { path: 'create-role', component: CreateRoleComponent},
    { path: 'reports', component: ReportsComponent},
    { path: 'freelance', component: FreeComponent},
    { path: 'configuracion', component: configuracionComponent},
    { path: 'fijo', component: FijoComponent},
    { path: 'crear-usuario', component: CrearUsuarioComponent},
    { path: 'tasa', component: TasaComponent},
    { path: 'pdf', component: PdfComponent},
    { path: 'beneficios', component: BeneficiosComponent},
    { path: 'vista-prestaciones', component: VistaPrestacionesComponent},

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
