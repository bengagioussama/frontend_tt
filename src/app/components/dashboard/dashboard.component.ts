import { Component, OnInit } from '@angular/core';
import { Info } from 'src/app/info';
import { InfoService } from 'src/app/service/info.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  infos: Info[] = [];
  domesticInfos: Info[] = [];
  industrialInfos: Info[] = [];

  constructor(private infoService: InfoService) { }

  ngOnInit(): void {
    this.loadInfos();
  }

  loadInfos(): void {
    this.infoService.getAllInfos().subscribe(
      (infos: Info[]) => {
        this.infos = infos;
      },
      error => {
        console.error('Erreur lors du chargement des informations:', error);
        // Gérer l'erreur ici
      }
    );
  }

  
}
