import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    servers = [];

    onAddServer() {
        this.servers.push('Server added');
    }

    onDeleteServer(id: number) {
        const position = id;
        this.servers.splice(position,1);
    }

}
