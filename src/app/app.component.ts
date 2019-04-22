import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displaySelector: string;

  setDisplaySelector(event: any) {
    this.displaySelector = event;
  }
}
