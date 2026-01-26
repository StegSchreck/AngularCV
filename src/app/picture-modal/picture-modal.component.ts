import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../material/material.module';

@Component({
    selector: 'app-picture-modal',
    templateUrl: './picture-modal.component.html',
    styleUrls: ['./picture-modal.component.css'],
    standalone: true,
    imports: [MaterialModule]
})
export class PictureModalComponent {
    public dialogRef = inject(MatDialogRef<PictureModalComponent>);
    public data = inject(MAT_DIALOG_DATA);

    public imagePath: string;
    public title: string;

    constructor() {
        this.imagePath = this.data.picture;
        this.title = this.data.title;
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}
