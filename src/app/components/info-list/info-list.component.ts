import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Info } from 'src/app/info';
import { InfoService } from 'src/app/service/info.service';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { EditInfoDialogComponent } from '../edit-info-dialog/edit-info-dialog.component'; // Import the edit dialog component

@Component({
  selector: 'app-info',
  templateUrl: './info-list.component.html',
  styleUrls: ['./info-list.component.css']
})
export class InfoListComponent implements OnInit {
  infos: Info[] = [];

  constructor(private infoService: InfoService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadInfos();
  }

  loadInfos(): void {
    this.infoService.getAllInfos().subscribe(
      infos => {
        this.infos = infos;
      },
      error => {
        console.error('Error loading Infos:', error);
      }
    );
  }

  openEditDialog(info: Info): void {
    const dialogRef = this.dialog.open(EditInfoDialogComponent, {
      width: '400px',
      data: info // Pass the info object as data to the dialog
    });

    dialogRef.afterClosed().subscribe(updatedInfo => {
      if (updatedInfo) {
        // Call the service to update the info with the updatedInfo object
        this.infoService.updateInfo(updatedInfo.id, updatedInfo).subscribe(
          updated => {
            // Handle successful update, if needed
            console.log('Info updated:', updated);
          },
          error => {
            console.error('Error updating Info:', error);
          }
        );
      }
    });
  }

  deleteInfo(id: number): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.infoService.deleteInfo(id).subscribe(
          () => {
            // Remove the deleted Info from the list
            this.infos = this.infos.filter(info => info.id !== id);
            console.log('Info deleted');
          },
          error => {
            console.error('Error deleting Info:', error);
          }
        );
      }
    });
  }
}
