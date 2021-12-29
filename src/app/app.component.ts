import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, LinearScale, BarController, CategoryScale, BarElement, PieController, PointElement, ArcElement } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    // Chart.register(PieController, LinearScale, CategoryScale, ArcElement);
    

    // new Chart("canvas-tipo", {
    //   type: 'pie',
    //   data: {
    //     labels: ['Ações', 'Cripto', 'FII', 'ETF',],
    //     datasets: [{
    //       label: 'Tipo',
    //       data: [30, 20, 20, 30],
    //       backgroundColor: [
    //         'rgba(255, 99, 132, 1)',
    //         'rgba(54, 162, 235, 1)',
    //         'rgba(255, 206, 86, 1)',
    //         'rgba(75, 192, 192, 1)'
    //       ]
    //     }]
    //   }
    // });
  }
}
