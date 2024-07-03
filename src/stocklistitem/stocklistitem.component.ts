import {
  Component,
  Input,
  EventEmitter,
  Output,
  ChangeDetectorRef,
} from '@angular/core';
import { StockSymbol } from '../app/model/symbol.model';

@Component({
  selector: 'app-stocklistitem',
  standalone: true,
  imports: [],
  templateUrl: './stocklistitem.component.html',
  styleUrl: './stocklistitem.component.css',
})
export class StocklistitemComponent {
  @Input() symbol: StockSymbol;
  @Output() symbolSelected = new EventEmitter<StockSymbol>();
  constructor() {}

  ngOnInit() {}
  onSelected() {
    this.symbolSelected.emit(this.symbol);
  }
}
