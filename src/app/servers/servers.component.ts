import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = '';
  username = '';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];
  visible: any;
  clicks = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

  resetUsername() {
    this.username = '';
  }

  logClicks(event: MouseEvent) {
    this.clicks.push(event.timeStamp.toString());
  }

  getColor() {
    return this.clicks.length > 5 ? 'green' : '';
  }
}
