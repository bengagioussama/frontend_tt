import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
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
  public chart: any;

  constructor(private infoService: InfoService) { }

  ngOnInit(): void {
    this.createChart();
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

  createChart(){

    this.chart = new Chart("MyChart", {
      type: 'pie', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['eaux usées', 'eaux usées Type 1','eaux usées Type 2','eaux usées type 3','eaux usées type 4','eaux usées type 5', ],
	       datasets: [{
    label: 'Quantité',
    data: [300, 240, 100, 432, 253, 34],
    backgroundColor: [
      'red',
      'pink',
      'green',
			'yellow',
      'orange',
      'blue',			
    ],
    hoverOffset: 4
  }],
      },
      options: {
        aspectRatio:2.5
      }

    });
  }

  
}
