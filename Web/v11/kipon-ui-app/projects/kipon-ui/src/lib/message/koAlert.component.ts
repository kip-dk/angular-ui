import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
    selector: 'ko-alert',
    templateUrl: './koAlert.component.html',
    styleUrls: ['./koAlert.component.css']
})

export class KoAlertComponent {

  @Input('align') align: string = 'left';
    constructor() {
    }
}
