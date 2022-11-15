import {AfterViewInit, ViewChild, Component, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {configuracionServices} from '../../../services/configuracion.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ThisReceiver, ThrowStmt } from '@angular/compiler';
import { TasaComponent } from '../tasa/tasa.component';
import { AumentoComponent } from '../aumento/aumento.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})


export class configuracionComponent  {
  configuracion: any[] = [];
  dataSource = new MatTableDataSource(this.configuracion);
  displayedColumns: string[] = ['id','name', 'last_name', 'CI','id_department','num', 'eliminar'];


constructor(private service: configuracionServices,
            public dialog: MatDialog,){

            }

ngOnInit(): void {

  this.cargarData();
}

cargarData(){
  this.service.getAllconfiguracion().subscribe(result => {
    this.configuracion = result;
    console.log(this.configuracion);
    this.dataSource.data = [];
    this.dataSource.data = this.configuracion.slice(0);
  });
}

editartasa(): void{
  const dialogRef = this.dialog.open(TasaComponent, {});

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });

}

editarsalario(): void{
  const dialogRef = this.dialog.open(AumentoComponent, {});

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });

}

eliminar(id:string){
console.log(id);
}

}





