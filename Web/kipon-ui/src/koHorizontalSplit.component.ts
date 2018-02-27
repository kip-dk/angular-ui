import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';


@Component({
    selector: 'ko-horizontal-split',
    templateUrl: './koHorizontalSplit.component.html',
    styleUrls: ['./koHorizontalSplit.component.css']
})

export class KoHorizontalSplitComponent {
    constructor() {
    }

    @Input() height: string = '50%';
    @Input() fixed: string = 'top';


    topStyle;
    bottomStyle;


    ngOnInit() {
        if (this.height == null) {
            this.height = '50%';
        }

        if (this.fixed == null) {
            this.fixed = 'top';
        }

        if (this.fixed == 'top') {
            this.topStyle = {
                height: this.height
            };
            this.bottomStyle = {
                top: this.height
            }
        } else {
            this.topStyle = {
                bottom: this.height
            }
            this.bottomStyle = {
                height: this.height
            }
        }
    }
}
