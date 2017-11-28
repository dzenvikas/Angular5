// importing 'Component' from angular core
import { Component } from '@angular/core';

// a component
@Component({
    // creating selector
    selector: 'app-successAlert',
    templateUrl: './successAlert.component.html',
    styles: [`
        p {
            color: green;
        }
        `]
})
export class SuccessAlertComponent {

}
