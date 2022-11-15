import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { EmpleadoslcServices } from 'src/app/services/fijo.service';
import { EditComponent } from '../edit/edit.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  Usuario: any[] = [];
  dataSource = new MatTableDataSource(this.Usuario);
  displayedColumns: string[] = ['id','username', 'email', 'name','last_name'];
  

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private UsuariosService: UsuariosService,private _snackBar: MatSnackBar,  public dialog: MatDialog) { }

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
    this.UsuariosService.getAllUsuarios().subscribe(result => {
      this.Usuario = result.rows;
      console.log(this.Usuario);
      this.dataSource.data = [];
      this.dataSource.data = this.Usuario;
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


}
