import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import jsPDF from "jspdf";
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {
  @ViewChild('canvas') canvas!: ElementRef;
  anio: number;

  constructor() {
    this.anio = new Date().getFullYear();
   }

  ngOnInit(): void {
  }


//Trae los datos que están en el HTML y los envía a un archivo pdf en imagen
downloadImage(){
  html2canvas(this.canvas.nativeElement).then(canvas => {
    var img = canvas.toDataURL("image/png");
    var doc = new jsPDF("p", "mm", "letter");
    doc.addImage(img,'PNG',20, 5, 170, 250);
    doc.save("prestaciones.pdf");
  });
}


}

