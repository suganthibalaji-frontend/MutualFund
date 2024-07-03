import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  ViewChildren,
  QueryList,
  Renderer2,
} from '@angular/core';
import { ChartDataServiceService } from '../chart-data-service.service';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-stockbody',
  standalone: true,
  imports: [],
  providers: [ChartDataServiceService],
  templateUrl: './stockbody.component.html',
  styleUrl: './stockbody.component.css',
})
export class StockbodyComponent {
  @ViewChild('charts') public chartEl: ElementRef;
  @ViewChildren('el', { read: ElementRef }) children: QueryList<ElementRef>;

  constructor(
    private hcs: ChartDataServiceService,
    private renderer: Renderer2,
    private host: ElementRef
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.createChart('ATVI');
  }

  ngOnDestroy() {}

  createChart(id) {
    if (this.chartEl.nativeElement.innerHTML !== '') {
      this.chartEl.nativeElement.innerHTML = '';
    }
    this.hcs.loadData('ATVI', (symbol, data) => {
      this.hcs.createChart(this.chartEl.nativeElement, symbol, data);
    });
  }
}
