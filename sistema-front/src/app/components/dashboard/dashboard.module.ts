import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsersComponent } from './users/users.component';
import { ReportsComponent } from './reports/reports.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { CreateRoleComponent } from './users/create-role/create-role.component';
import { NavComponent } from './nav/nav.component';
import { FreeComponent } from './freelance/freelance.component';
import { configuracionComponent } from './configuracion/configuracion.component';
import { FijoComponent } from './fijo/fijo.component';
import { EditComponent } from './edit/edit.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSortModule} from '@angular/material/sort';
import { CrearUsuarioComponent } from './fijo/crear-usuario/crear-usuario.component';
import {MatSelectModule} from '@angular/material/select';
import { TasaComponent } from './tasa/tasa.component';
import { PdfComponent } from './pdf/pdf.component';
import { AumentoComponent } from './aumento/aumento.component';
import { BeneficiosComponent } from './beneficios/beneficios.component';
import { VistaPrestacionesComponent } from './vista-prestaciones/vista-prestaciones.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NavbarComponent,
    UsersComponent,
    ReportsComponent,
    CreateUserComponent,
    CreateRoleComponent,
    NavComponent,
    FreeComponent,
    configuracionComponent,
    FijoComponent,
    EditComponent,
    CrearUsuarioComponent,
    TasaComponent,
    PdfComponent,
    AumentoComponent,
    BeneficiosComponent,
    VistaPrestacionesComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    MatDialogModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatSortModule,
    MatSelectModule,
    FormsModule,

    //AngularFontAwesomeModule,


  ]
})
export class DashboardModule { }
