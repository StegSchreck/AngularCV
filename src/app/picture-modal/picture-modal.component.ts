import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-picture-modal',
  templateUrl: './picture-modal.component.html',
  styleUrls: ['./picture-modal.component.css'],
})
export class PictureModalComponent implements OnInit {
  public title;
  public imagePath;

  constructor(
    private dialogRef: MatDialogRef<PictureModalComponent>,
    @Inject(MAT_DIALOG_DATA) data,
  ) {
    this.imagePath = data.imagePath;
    this.title = data.title;
  }

  ngOnInit() { }

}
