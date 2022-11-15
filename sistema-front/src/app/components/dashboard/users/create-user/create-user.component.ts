import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {EmpleadoslcServices} from '../../../../services/fijo.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  listRoles: any[] = ['Director', 'Gerente Administración', 'Analista Administración', 'Gerente Contabilidad', 'Analista Contabilidad'];

  constructor() { } 

  ngOnInit(): void {
  }

}
