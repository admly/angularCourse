import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  counting = 0;
  private intervalId: any;

  evenNumbersArray: number[] = [];
  oddNumbersArray: number[] = [];

  @Output() oddNumbers = new EventEmitter<number[]>();
  @Output() evenNumbers = new EventEmitter<number[]>();

  constructor() {
  }

  ngOnInit() {
  }


  startGame($event: MouseEvent) {
    this.intervalId = setInterval(() => {
      this.counting = this.counting + 1;
      if (this.isOdd(this.counting)) {
        this.oddNumbersArray.push(this.counting);
        this.oddNumbers.emit(this.oddNumbersArray);
      }

      if (!this.isOdd(this.counting)) {
        this.evenNumbersArray.push(this.counting);
        this.evenNumbers.emit(this.evenNumbersArray);
      }
    }, 1000);
  }

  stopGame($event: MouseEvent) {
    console.log('stop');
    clearInterval(this.intervalId);
  }

  isOdd(num) {
    return num % 2;
  }

}
