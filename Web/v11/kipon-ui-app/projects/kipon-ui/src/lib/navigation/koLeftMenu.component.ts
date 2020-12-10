import { Component, Input, Output, EventEmitter, ElementRef, AfterViewInit } from '@angular/core';

import { KoNavigation } from '../models/navigation.interface';

@Component({
  selector: 'ko-left-menu',
  templateUrl: './koLeftMenu.component.html',
  styleUrls: ['./koLeftMenu.component.css']

})
export class KoLeftMenuComponent implements AfterViewInit {

  @Input('items') items: KoNavigation[] = [];
  @Input('current') current!: string;
  @Output('currentChange') currentChange: EventEmitter<string> = new EventEmitter<string>();

  itemheight!: string;
  over!: KoNavigation | null;

  constructor(private er: ElementRef) {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.itemheight = (this.er.nativeElement.offsetWidth - 40).toString() + "px";
    }, 1);
  }

  setCurrent(item: KoNavigation): void {
    if (!item.disabled) {
      if (item.click == null) {
        this.current = item.id;
        this.currentChange.emit(this.current);
      } else {
        item.click();
      }
    }
  }

  overItem(v: KoNavigation): void {
    if (!v.disabled) {
      this.over = v;
    }
  }

  outItem(): void {
    this.over = null;
  }
}
