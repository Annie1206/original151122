import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Data } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tasa',
  templateUrl: './tasa.component.html',
  styleUrls: ['./tasa.component.css']
})
export class TasaComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TasaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Data,
    public dialog: MatDialog,
    ) { }

  ngOnInit(): void {
  }

}

