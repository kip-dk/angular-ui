import { Component, OnInit } from '@angular/core';

import { KoNavigation, KoDivider, KoNavigationByCssClass } from 'kipon-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'kipon-ui-app';

  items!: KoNavigation[];
  lItems!: KoNavigation[];
  current!: string;
  lCurrent!: string;

  expand1: boolean = true;
  expand2: boolean = true;
  all: boolean = true;

  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  ngOnInit(): void {
    this.items = [];
    this.items.push({ id: 'i1', title: 'Title 1', disabled: false, click: null, over: null });
    this.items.push({ id: 'i2', title: 'Title 2', disabled: false, click: null, over: null });
    this.items.push({ id: 'i3', title: 'Title 3', disabled: true, click: null, over: null });
    this.items.push({ id: 'i4', title: 'Title 4', disabled: false, click: null, over: null });
    this.items.push(new KoDivider());
    this.items.push({ id: 'i5', title: 'Title 5', disabled: false, click: null, over: null });
    this.items.push(new KoNavigationByCssClass("i6", "fa fa-archive", false, "Title mouse over on top menu"));
    this.items.push({ id: 'i7', title: 'Title 6', disabled: false, click: null, over: null });
    this.current = "i2";

    this.lItems = [];
    this.lItems.push({ id: 'h1', title: 'A', disabled: false, click: null, over: null });
    this.lItems.push({ id: 'h2', title: 'B', disabled: false, click: null, over: null });
    this.lItems.push(new KoNavigationByCssClass("h3", "fa fa-archive", false, "Title mouse over on left menu"));
    this.lCurrent = 'h1';
  }

  model = {
    dn: 34.67,
    message: 'This is the default message',
    over: null
  }

  focus = {
    felt1: false,
    felt2: false
  }

  focus1(): void {
    this.focus.felt1 = true;
  }

  focus2(): void {
    this.focus.felt2 = true;
  }

  dnWasChanged(v: number) {
    this.model.message = 'The number is now: ' + v.toString();
  }

  toggleAll(): void {
    this.expand1 = !this.all;
    this.expand2 = !this.all;
    this.all = !this.all;
  }
}
