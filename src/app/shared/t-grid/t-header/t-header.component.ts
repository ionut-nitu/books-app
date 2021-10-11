import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 't-header',
  templateUrl: './t-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./t-header.component.scss']
})
export class THeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
