import { Directive, ElementRef, HostListener, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Directive({
    selector: '[ko-over]'
})
export class KoOverDirective {
    constructor(private el: ElementRef) {
    }

    @Input('ko-over') current: any;


    @HostListener('mouseover', ['$event']) onMouseover($event) {
        if (this.current != null) {
            this.current['over'] = true;
        }
    }

    @HostListener('mouseleave', ['$event']) onMouseleave($event) {
        if (this.current != null) {
            delete this.current['over'];
        }
    }
}
