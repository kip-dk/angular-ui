import { Component, OnInit } from '@angular/core';

import { KoNavigation, KoDivider } from 'kipon-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'kipon-ui-app';

  items: KoNavigation[];
  current: string;

  ngOnInit(): void {
    this.items = [];
    this.items.push({ id: 'i1', title: 'Title 1', disabled: false });
    this.items.push({ id: 'i2', title: 'Title 2', disabled: false });
    this.items.push({ id: 'i3', title: 'Title 3', disabled: true });
    this.items.push({ id: 'i4', title: 'Title 4', disabled: false });
    this.items.push(new KoDivider());
    this.items.push({ id: 'i5', title: 'Title 5', disabled: false });
    this.items.push({ id: 'i6', title: 'Title 6', disabled: false });
    this.current = "i2";
  }

  model = {
    dn: 34.67,
    message: 'This is the default message'
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
}
