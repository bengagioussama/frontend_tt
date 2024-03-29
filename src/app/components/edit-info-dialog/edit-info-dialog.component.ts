import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Info } from '../../info'; // Import the Info model

@Component({
  selector: 'app-edit-info-dialog',
  templateUrl: './edit-info-dialog.component.html',
  styleUrls: ['./edit-info-dialog.component.css']
})
export class EditInfoDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<EditInfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public info: Info
  ) {}

  saveChanges(): void {
    // You can implement saving changes logic here
    // For now, let's just close the dialog
    this.dialogRef.close(this.info);
  }

  cancelEdit(): void {
    this.dialogRef.close(); // Close the dialog without saving changes
  }
}
