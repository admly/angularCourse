import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  odd: number;
  even: number;

  evenNumbers: number[] = [];
  oddNumbers: number[] = [];

  addEvenNumber(evenNumbers: number[]) {
    this.evenNumbers = evenNumbers;
  }

  addODdNumber(oddNumbers: number[]) {
    this.oddNumbers = oddNumbers;
  }
}
