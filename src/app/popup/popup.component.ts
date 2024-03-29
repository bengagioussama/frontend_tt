import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

interface PopupData {
  message: string;
}

@Component({
  selector: 'app-popup',
  template: `
    <h2 mat-dialog-title>Success</h2>
    <div mat-dialog-content>{{ data.message }}</div>
    <div mat-dialog-actions>
      <button mat-button [mat-dialog-close]="'close'">Close</button>
    </div>
  `,
})
export class PopupComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: PopupData) {}
}

