import { OnInit } from '@angular/core';
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


@Component({
  selector: 'app-beneficios',
  templateUrl: './beneficios.component.html',
  styleUrls: ['./beneficios.component.css']
})
export class BeneficiosComponent implements OnInit {

  constructor(private service: EmpleadoslcServices,
    public dialog: MatDialog,
    ) {}


  beneficios: any[] = [];
  dataSource = new MatTableDataSource(this.beneficios);
  displayedColumns: string[] = [ 'CI','name', 'last_name', 'salariobase', 'editar'];

@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;



ngOnInit(): void {

  this.cargarData();

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
    this.beneficios = result.rows;
    console.log(this.beneficios);
    this.dataSource.data = [];
    this.dataSource.data = this.beneficios;
  });
}

editar(id:string): void{
  const dialogRef = this.dialog.open(EditComponent, {
   data:{ id: id }
  });
  console.log(id)
  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });

}

eliminar(id:string){
console.log(id);
}

}
