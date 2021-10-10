import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 't-progress',
  templateUrl: './t-progress.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./t-progress.component.scss']
})
export class TProgressComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
