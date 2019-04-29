import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor() {
  }

  @Output() accountsEmitter = new EventEmitter<{name: string, status: string}[]>();

  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  addAccount(name: string, status: string) {
    this.accounts.push({name: name, status: status});
    this.accountsEmitter.emit(this.accounts);
  }

  updateStatus(id: string, status: string) {
    this.accounts[id].status = status;
  }
}
