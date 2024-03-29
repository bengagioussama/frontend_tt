import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Type } from '../type';
import { TypeService } from '../service/type.service';

@Component({
  selector: 'app-ajouttype',
  templateUrl: './ajouttype.component.html',
  styleUrls: ['./ajouttype.component.css']
})
export class AjoutTypeComponent implements OnInit {
  types: Type[] = []; // Tableau pour stocker les types
  selectedType: Type | undefined; // Type sélectionné, undefined au départ
  typeForm: FormGroup; // Utilisation de FormGroup pour le formulaire
  constructor(
    private typeService: TypeService,
    private fb: FormBuilder, // Injection de FormBuilder
    private router: Router // Injection de Router
  ) {}

  ngOnInit(): void {
    this.getTypes(); // Appel de la méthode pour récupérer les types au chargement du composant
    // Initialisation du formulaire avec FormBuilder
    this.typeForm = this.fb.group({
      typeName: ['', Validators.required], // Validation requise pour le nom du type
      description: ['', Validators.required], // Validation requise pour la description du type
      datec: ['', Validators.required], // Validation requise pour la datec du type
      responsable: ['', Validators.required], // Validation requise pour le responsable du type
      statut: ['', Validators.required] // Validation requise pour le statut du type
    });
  }

  // Méthode pour récupérer tous les types depuis le service
  getTypes(): void {
    this.typeService.getAllTypes()
      .subscribe(types => this.types = types);
  }

  // Méthode pour sélectionner un type
  onSelect(type: Type): void {
    this.selectedType = type;
  }

  // Méthode pour ajouter un type
  add(): void {
    if (this.typeForm.invalid) {
      return; // Sortie si le formulaire est invalide
    }
    // Création d'un nouvel objet Type à partir des valeurs du formulaire
    const newType: Type = this.typeForm.value as Type;
    this.typeService.createType(newType)
      .subscribe(type => {
        this.types.push(type);
        
      });
  }

  // Méthode pour supprimer un type
  delete(type: Type): void {
    this.types = this.types.filter(t => t !== type);
    this.typeService.deleteType(type.id).subscribe();
  }
}
