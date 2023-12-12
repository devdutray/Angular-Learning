import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  
  allowNewServer = false;
  serverCreationStatus = "No new servers";
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['Test Server 1', 'Test Server 2'];

  constructor(){
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'New Server Created! Name is ' + this.serverName;
    console.log(this.serverCreationStatus);
    // let divElement = document.getElementById("appendHere");
    // const newServer = document.createElement("app-server");
    // divElement.appendChild(newServer);
  }

  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
