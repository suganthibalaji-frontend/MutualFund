import { Component, ViewChild } from '@angular/core';
import { StocklistComponent } from '../stocklist/stocklist.component';
import { StockbodyComponent } from '../stockbody/stockbody.component';
import { StockSymbol } from '../app/model/symbol.model';

@Component({
  selector: 'app-stocks',
  standalone: true,
  imports: [StocklistComponent, StockbodyComponent],
  templateUrl: './stocks.component.html',
  styleUrl: './stocks.component.css',
})
export class StocksComponent {
  @ViewChild(StockbodyComponent) stockbody: StockbodyComponent;

  symbolSelectedFromList(symbol: StockSymbol) {
    this.stockbody.createChart(symbol.id);
  }
}
