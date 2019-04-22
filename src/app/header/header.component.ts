import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() whatToDisplay = new EventEmitter<string>();
  constructor() {
  }

  ngOnInit() {
  }


  display(display: string) {
    this.whatToDisplay.emit(display);
  }
}
