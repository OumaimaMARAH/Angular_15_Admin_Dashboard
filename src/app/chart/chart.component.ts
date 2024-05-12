// chart.component.ts

import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getUsersData().subscribe(data => {
      this.renderChart(data);
    });
  }

  renderChart(data: any): void {
    // Process data and render chart using Chart.js
  }
}
