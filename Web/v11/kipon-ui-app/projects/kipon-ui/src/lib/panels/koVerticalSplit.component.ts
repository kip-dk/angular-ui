import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'ko-vertical-split',
  templateUrl: './koVerticalSplit.component.html',
  styleUrls: ['./koVerticalSplit.component.css']
})
export class KoVerticalSplitComponent implements OnInit, OnChanges {
  constructor() {
  }

  private thread: any;

  @Input() width: string = '50%';
  @Input() fixed: string = 'left';

  leftStyle: any;
  rightStyle: any;

  ngOnInit() {
    this.init();
  }

  ngOnChanges(): void {
    if (this.thread != null) clearTimeout(this.thread);

    this.thread = setTimeout(() => {
      this.init;
    }, 500);
  }

  private init(): void {
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
