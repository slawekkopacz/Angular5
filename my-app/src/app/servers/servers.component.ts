import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServers: boolean = false;
  newServerName: string = 'Placeholder';
  serverCreationStatus: string = 'Not created';

  constructor() {
    setTimeout(() => {
      this.allowNewServers = true;
    },
    2000);
  }

  ngOnInit() {
  }

  onServerCreated() {
    this.serverCreationStatus = this.newServerName + ' Created!';
    this.newServerName = '';
  }

}
