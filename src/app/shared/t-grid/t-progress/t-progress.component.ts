import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 't-progress',
  templateUrl: './t-progress.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./t-progress.component.scss']
})
export class TProgressComponent implements OnChanges {
  @Input() type: 'progress' | 'spinner';
  @Input() radius:number = 50;
  @Input() color:string;
  @Input() progress:number = 0;
  constructor() { }
  ngAfterViewInit() : void {
    if(this.type === 'progress') {
      requestAnimationFrame(() => this.drawCircle())
    }
  }
  ngOnChanges(): void {
    if(this.type === 'progress') {
      requestAnimationFrame(() => this.drawCircle())
    }
  }
  drawCircle() {
    const canvas: HTMLCanvasElement = document.getElementById('progress-circle') as HTMLCanvasElement;
    if(!canvas) {
      return 
    }
    const length =  this.radius * 2 + 30
    canvas.height = length
    canvas.width = length
    const cx: CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D;
    cx.clearRect(0,0,length,length);
    cx.beginPath()
    cx.lineWidth = 5
    cx.strokeStyle = '#e2e2e2'
    cx.arc(length /2 ,length/ 2, this.radius, 0, Math.PI  * 2) ;
    cx.stroke()
    cx.beginPath()
    cx.strokeStyle = this.color;
    cx.fillStyle = this.color;
    cx.fillText(this.progress + '%', length/2 - 8, length/2 + 5)
    cx.arc(length /2 ,length/ 2, this.radius, -(Math.PI/ 2), (Math.PI  * 2) *   (this.progress / 100) - Math.PI / 2) ;
    cx.stroke()
  }
}
