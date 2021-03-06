import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output('srCreated') serverCreated = new EventEmitter <{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter <{serverName: string, serverContent: string}>();

  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

    onAddServer() {
      this.serverCreated.emit({
        serverName: this.newServerName,
        serverContent: this.newServerContent
      });
    }

    onAddServerBlurprint() {
      this.blueprintCreated.emit({
        serverName: this.newServerName,
        serverContent: this.newServerContent
      });
    }

}
