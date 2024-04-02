import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Info } from 'src/app/info';
import { InfoService } from 'src/app/service/info.service';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from 'src/app/popup/popup.component';
import { Type } from 'src/app/type';
import { TypeService } from 'src/app/service/type.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  infoForm: FormGroup;
  types: Type[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private infoService: InfoService,
    private dialog: MatDialog,
    private typeService: TypeService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.fetchTypes();
  }

  createForm(): void {
    this.infoForm = this.formBuilder.group({
      debit: ['', Validators.required],
      volume: ['', Validators.required],
      ph: ['', Validators.required],
      type: [null, Validators.required],
      categorie: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.infoForm.valid) {
      const formValue = this.infoForm.value;
     

      const info: Info = {
        id: null,
        debit: formValue.debit,
        volume: formValue.volume,
        ph: formValue.ph,
        typeId: formValue.typeId,
        categorie: formValue.categorie
      };

      console.log('Form Data:', info);
      this.infoService.addInfo(info).subscribe(
        response => {
          console.log('Information ajoutée avec succès:', response);
          this.infoForm.reset();
          this.infoService.emitInfoAddedEvent();
          this.openPopup();
        },
        error => {
          console.error('Erreur lors de l\'ajout d\'information:', error);
        }
      );
    } else {
      Object.values(this.infoForm.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

  openPopup(): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '250px',
      data: { message: 'Information ajoutée avec succès!' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  fetchTypes(): void {
    this.typeService.getAllTypes().subscribe(
      (types: Type[]) => {
        console.log(types);
        this.types = types;
      },
      (error) => {
        console.error('Error fetching types:', error);
      }
    );
  }
}