import { Directive, ElementRef, HostListener, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Directive({
    selector: '[ko-decimal]'
})
export class KoDecimalDirective {
    constructor(private el: ElementRef) {
        if (el.nativeElement) {
            el.nativeElement.style['text-align'] = 'right';
        }
    }

    @Input('ko-decimal') decimals: number = 2;
    _value: number;
    @Input('ko-value')
    get value() {
        return this._value;
    }

    @Output('ko-valueChange') valueChange: EventEmitter<any> = new EventEmitter();
    set value(val) {
        this._setValue(val, true);
    }

    private _setValue(val: number, internal: boolean): void {
        this._value = val;
        if (!internal) {
            this.valueChange.emit(this._value);
        }
    }

    controlDown: boolean = false;
    syncThread;

    ngOnChanges(changes) {
        this.setValueString();
    }

    @HostListener('keydown',['$event']) onKeydown($event) {
        switch ($event.key) {
            case 'Backspace':
            case 'Tab':
            case 'ArrowLeft':
            case 'ArrowRight':
            case 'Delete':
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9': {
                this.bindValueBack();
                return true;
            }
            case ',': {
                if (this.decimals == 0) {
                    return false;
                }
                this.bindValueBack();
                return true;
            }
            case 'Control': {
                this.controlDown = true;
                this.bindValueBack();
                return true;
            }
            case 'c':
            case 'C':
            case 'v':
            case 'V': {
                if (this.controlDown == true) {
                    this.bindValueBack();
                    return true;
                }
                $event.stopPropagation();
                return false;
            }
            default: {
                $event.stopPropagation();
                return false;
            }
        }
    }

    @HostListener('blur') onBlur() {
        this.bindValueBack(0);
        setTimeout(() => {
            this.setValueString();
        }, 1);
    }

    private setValueString(): void {
        if (this.el.nativeElement != null) {
            this.el.nativeElement.value = this.numberToString(this._value, this.decimals);
        }
    }

    private bindValueBack();
    private bindValueBack(timeout: number);
    private bindValueBack(timeout: number = 3000) {
        if (this.syncThread != null) clearTimeout(this.syncThread);
        this.syncThread = setTimeout(() => {
            this.syncThread = null;
            if (this.el.nativeElement != null) {
                let v = this.el.nativeElement.value;
                if (v == null || v == '') {
                    this._setValue(null, false);
                } else {
                    this._setValue(Number(v.replace(',','.')), false);
                }
            }
        }, timeout);
    }

    private numberToString(value: number, decimals: number): string {
        if (value == null) {
            return '';
        }

        if (decimals == null) {
            return value.toString().replace('.', ',');
        }

        let result = value.toString().replace('.', ',');
        if (decimals <= 0) {
            var split = result.split(',');
            if (split.length == 2 && Number(split[1]) > 0) {
                return Math.round(value).toString().replace(".", ",").split(',')[0];
            }
            return result.split(',')[0];
        }

        if (result.indexOf(',') < 0) {
            result += ',0';
        }

        let decimalPart = result.split(',')[1];
        if (decimalPart.length == decimals) {
            return result;
        }

        if (decimalPart.length <= decimals) {
            return result.split(',')[0] + ',' + String(decimalPart + '00000000000000000' + decimalPart).substring(0, decimals);
        }

        var round = Number('1' + String('00000000000000000').slice((-1) * decimals));

        var roundedValue = Math.round(value * round) / round;

        return this.numberToString(roundedValue, decimals);
    }

}