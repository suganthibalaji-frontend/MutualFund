import { Component } from '@angular/core';
import Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import * as UserData from '../app/model/user-data.json';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HighchartsChartModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  dashboardData: any = {};
  constructor() {}
  ngOnInit() {
    this.dashboardData = UserData;
  }

  Highcharts: typeof Highcharts = Highcharts;
  updateFlag = false;

  data = [1, 2, 3, 4];

  chartOptions: Highcharts.Options = {
    chart: {
      plotBorderWidth: null,
      plotShadow: false,
    },
    title: {
      text: 'Your Stock Ranges',
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}%</b>: {point.percentage:.1f} %',
          style: {
            color: 'black',
          },
        },
      },
    },
    series: [
      {
        type: 'pie',
        name: 'Mutual Fund',
        data: [
          ['Kotak', 45.0],
          ['Axis', 26.8],
          {
            name: 'ICICI',
            y: 12.8,
            sliced: true,
            selected: true,
          },
          ['Quant', 8.5],
          ['SBI', 6.2],
          ['Equity', 0.7],
        ],
      },
    ],
  };
}
