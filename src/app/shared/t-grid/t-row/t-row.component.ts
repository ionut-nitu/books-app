import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 't-row',
  templateUrl: './t-row.component.html',
  styleUrls: ['./t-row.component.scss']
})
export class TRowComponent implements OnInit {
  @Input() columns:string[] = [];
  @Input() item:any;
  @Output() itemSelected = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  onSelect(item: any) {
    this.itemSelected.emit(item);
  }

}
