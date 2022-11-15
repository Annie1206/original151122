import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Data } from '@angular/router';
import { FijoComponent } from '../fijo/fijo.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmpleadoslcServices } from 'src/app/services/fijo.service';
import Swal from 'sweetalert2';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  fecha: Date = new Date();
  string = 'date';
  current_timestamp: string = '';

  constructor(private service: EmpleadoslcServices, public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  form = new FormGroup({
    CI: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    last_name: new FormControl('', [Validators.required]),
    position: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    num: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    salariobase: new FormControl('', [Validators.required]),
  })

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    console.log(this.data);
    let date = new Date();
    let empleados = this.data;
    this.current_timestamp = date.getFullYear() + '-' +  String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0');
    console.log(this.current_timestamp);

    this.form.controls['CI'].setValue(empleados.CI);
    this.form.controls['name'].setValue(empleados.name);
    this.form.controls['last_name'].setValue(empleados.last_name);
    this.form.controls['position'].setValue(empleados.position);
    this.form.controls['address'].setValue(empleados.address);
    this.form.controls['num'].setValue(empleados.num);
    this.form.controls['date'].setValue(empleados.date);
    this.form.controls['salariobase'].setValue(empleados.salariobase);

  }

  onValue() {
    console.log(this.form.value)
  }

  update() {
    const empleados = this.form.value;
    empleados.created_at = this.current_timestamp;
    console.log(this.data.id);
    this.service.updateEmpleados(empleados, this.data.id).subscribe(respuesta => {
      console.log(respuesta);
    })

  }

  showModal(){
    Swal.fire(
      'Actualización realizada',
      'La actualización de los datos ha sido procesada exitosamente',
      'success'
    )
   }

}

