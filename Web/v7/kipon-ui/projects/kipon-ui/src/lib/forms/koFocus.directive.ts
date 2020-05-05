import { Directive, ElementRef, HostListener, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';

@Directive({ selector: '[ko-focus]' })
export class KoFocusDirective implements OnChanges {
    constructor(private hostElement: ElementRef) { }

    private _isFocused: boolean = false;

    @Input('ko-focus') get isFocused() { return this._isFocused };
    @Output('ko-focusChange') changeFocus: EventEmitter<boolean> = new EventEmitter<boolean>();

    set isFocused(v: boolean) {
        this._isFocused = v;
    }

    ngOnChanges(changes) {
        if (this.isFocused) {
          setTimeout(() => {
              this.hostElement.nativeElement.focus();
              this._isFocused = false;
              this.changeFocus.emit(false);
            }, 50);
        }
    }
}
