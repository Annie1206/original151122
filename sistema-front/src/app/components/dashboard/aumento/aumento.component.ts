import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Data } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-aumento',
  templateUrl: './aumento.component.html',
  styleUrls: ['./aumento.component.css']
})

export class AumentoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AumentoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Data,
    public dialog: MatDialog,
    ) { }

  ngOnInit(): void {
  }

}
