import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Data } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { FijoComponent } from '../fijo/fijo.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {EmpleadoslcServices} from '../../../services/fijo.service';
import { BeneficiosServices  } from 'src/app/services/prestaciones.service';
import { id } from '@swimlane/ngx-datatable';
import {PdfComponent} from 'src/app/components/dashboard/pdf/pdf.component';
import { Router, ActivatedRoute } from '@angular/router'
import Swal from 'sweetalert2';
//import { VacacionesComponent } from '../vacaciones/vacaciones.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonToggleModule} from '@angular/material/button-toggle';


@Component({
  selector: 'app-vista-prestaciones',
  templateUrl: './vista-prestaciones.component.html',
  styleUrls: ['./vista-prestaciones.component.css']
})
export class VistaPrestacionesComponent implements OnInit {
  opened = false;
  showFiller = false;
  pruebafijo: any = [];
  id: number = 0;
  datos: any ;
  benefits: any= [];
  dataSource = new MatTableDataSource(this.benefits);
  displayedColumns: string[] = [ 'datefin','salario_basico_mensual', 'salario_basico_diario', 'utilidades_diario','bono_vacional_diario',
                                 'salario_integral_diario','dias_prestaciones','apartado_mensual','acumulado','tasa',
                                 'intereses_prestaciones'];

@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;

constructor(private fijos: EmpleadoslcServices,
            private beneficios: BeneficiosServices,
            public dialog: MatDialog,
            private activerouter: ActivatedRoute,
            private router: Router,
            ) {}

/*  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
                      })*/

ngOnInit(): void {
 this.cargarGet();
 this.cargarData();
 this.getDatos();
}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  cargarGet(): void{
    this.id = this.beneficios.getId()
    console.log(this.id)
  }

  cargarData(){
    this.beneficios.getAllBenefits(this.id).subscribe(result => {
      this.benefits = result.rows; //rows viene de la consola
      console.log(this.benefits);
      this.dataSource.data = [];
      this.dataSource.data = this.benefits;
    });
   }



  /*vacaciones(): void{
    const dialogRef = this.dialog.open(VacacionesComponent, {
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }*/



  getDatos() {
    this.fijos.getAllFijos().subscribe((res: any) => {
      console.log(res.rows);
      console.log(res)
      console.log(typeof(res.rows))
      this.datos = res.rows.find((filas: any) => filas.id === this.id);
      console.log(this.datos);
    })

  }

  showModal(){
    Swal.fire({
      title: '¿Desea procesar el cálculo de prestaciones sociales del empleado?',
      // text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, procesar!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Procesado!',
          'Cálculo procesado exitosamente',
          'success'
        )
      }
    })
   }
   

}
