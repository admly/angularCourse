import {Component, EventEmitter, Output} from '@angular/core';
import {LoggingService} from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();
  private _loggingService: LoggingService;

  constructor(_loggingService: LoggingService) {
    this._loggingService = _loggingService;
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this._loggingService.logStatusChange(accountStatus);
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });

  }
}
