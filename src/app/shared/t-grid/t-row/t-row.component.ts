import { Component, Input, OnInit,EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { Column } from '../../interfaces/column.interface';

@Component({
  selector: 't-row',
  templateUrl: './t-row.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./t-row.component.scss']
})
export class TRowComponent implements OnInit {
  @Input() columns:Column[];
  @Input() item:any;
  @Output() itemSelected = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  onSelect(item: any) {
    this.itemSelected.emit(item);
  }

}
