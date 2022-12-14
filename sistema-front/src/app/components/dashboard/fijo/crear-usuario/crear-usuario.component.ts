import { EmpleadoslcServices } from 'src/app/services/fijo.service';
import { Data, Router } from '@angular/router';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  departamento: any[] = ['Administrativo', 'Directivo', 'Obrero', 'Profesor']
  fecha: Date = new Date();
  string = 'date';
  current_timestamp: string = '';
  title = 'sweetAlert';

  constructor(private service: EmpleadoslcServices, private rutas: Router,) { }

    form = new FormGroup({
      CI: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      position: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      num: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      salariobase: new FormControl('', [Validators.required]),
      created_at: new FormControl(`${this.current_timestamp}`),
    })




  ngOnInit(): void {
    let date = new Date();
    this.current_timestamp = date.getFullYear() + '-' +  String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0');
    //console.log(this.current_timestamp);
    //console.log(this.form.value)
  }

  onValue() {
    console.log(this.form.value)
  }

  create() {
    const data = this.form.value
    data.created_at = this.current_timestamp
    console.log(data);
    this.service.createEmpleados(data).subscribe(data => {
      console.log(data);
      this.rutas.navigateByUrl('/', { skipLocationChange: true }).then (() => {
        this.rutas.navigate(['/dashboard/fijo'])
      })
    })
  }

  showModal(){
    //if()
    Swal.fire(
      'Personal Registrado!',
      'El personal fue registrado exitosamente!',
      'success'
    )
   }

}
