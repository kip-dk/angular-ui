import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
    selector: 'ko-vertical-split',
    templateUrl: './koVerticalSplit.component.html',
    styleUrls: ['./koVerticalSplit.component.css']
})
export class KoVerticalSplitComponent {
    constructor() {
    }

    @Input() width: string = '50%';
    @Input() fixed: string = 'left';

    leftStyle;
    rightStyle;

    ngOnInit() {
        if (this.width == null) {
            this.width = '50%';
        }

        if (this.fixed == null) {
            this.fixed = 'left';
        }

        if (this.fixed == 'left') {
            this.leftStyle = {
                width: this.width
            };

            this.rightStyle = {
                left: this.width
            }
        } else {
            this.leftStyle = {
                right: this.width
            }
            this.rightStyle = {
                width: this.width
            }
        }
    }
}
