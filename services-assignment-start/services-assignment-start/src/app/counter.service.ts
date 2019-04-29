import {Injectable, Input, OnInit} from '@angular/core';
import {UsersService} from './users.service';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  inactiveActionsCounter = 0;
  activeActionsCounter = 0;

  constructor() {
  }

  incrementActiveToInactive(){
    this.inactiveActionsCounter++;
    console.log(this.inactiveActionsCounter);
  }

  incrementInactiveToActive() {
    this.activeActionsCounter++;
    console.log(this.activeActionsCounter);
  }
}
