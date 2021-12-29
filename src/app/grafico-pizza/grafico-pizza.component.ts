import { Component, OnInit } from '@angular/core';
import { ArcElement, CategoryScale, Chart, LinearScale, PieController } from 'chart.js';

@Component({
  selector: 'app-grafico-pizza',
  templateUrl: './grafico-pizza.component.html',
  styleUrls: ['./grafico-pizza.component.css']
})
export class GraficoPizzaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Chart.register(PieController, LinearScale, CategoryScale, ArcElement);
    new Chart("meu-grafico", {
      type: 'pie',
      data: {
        labels: ['ITUB4', 'ABEV3', 'BTC', 'IVVB11', 'HGLG11', 'HGRE11'],
        datasets: [{
          label: 'Geral',
          data: [20, 10, 20, 20, 15, 15],
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
          ]
        }]
      }
    });
  }
}
