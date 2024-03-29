import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent {
  constructor(private dialogRef: MatDialogRef<ConfirmationDialogComponent>) { }

  confirmDeletion() {
    this.dialogRef.close(true);
    console.log("YES");
  }

  cancelDeletion() {
    this.dialogRef.close(false);
    console.log("NO");
  }
}
