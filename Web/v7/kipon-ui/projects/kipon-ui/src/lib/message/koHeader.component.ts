import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
    selector: 'ko-header',
    templateUrl: './koHeader.component.html',
    styleUrls: ['./koHeader.component.css']
})

export class KoHeaderComponent {

  @Input('align') align: string = 'left';
    constructor() {
    }
}
