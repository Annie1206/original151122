import {AfterViewInit, ViewChild, Component, Inject} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import {EmpleadoslcServices} from '../../../services/fijo.service';
import {MatPaginatorModule} from '@angular/material/paginator';
import { EditComponent } from '../edit/edit.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fijo',
  templateUrl: './fijo.component.html',
  styleUrls: ['./fijo.component.css']
})

export class FijoComponent  {
  fijo: any[] = [];
  dataSource = new MatTableDataSource(this.fijo);
  displayedColumns: string[] = [ 'CI','name', 'last_name', 'position','address','num','date', 'salariobase', 'editar'];

@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;

constructor(private service: EmpleadoslcServices,
            public dialog: MatDialog,
            private rutas: Router,
            ) {}
            //public dialog: MatDialog ){}

ngOnInit(): void {

  this.cargarData();
 // this.dataSource.paginator = this.paginator;

}

ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

cargarData(){
  this.service.getAllFijos().subscribe(result => {
    this.fijo = result.rows;
    console.log(this.fijo);
    this.dataSource.data = [];
    this.dataSource.data = this.fijo;
  });
}

editar(empleados:any): void{
  const dialogRef = this.dialog.open(EditComponent, {
   data: empleados
  });
  console.log(empleados);
  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    this.rutas.navigateByUrl('/', {skipLocationChange: true}).then (() => {
      this.rutas.navigate(['/dashboard/fijo'])
    })
  });

}

eliminar(id:string){
console.log(id);
}

}



