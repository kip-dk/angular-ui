import { Component, Input, ElementRef, ViewChild, ViewEncapsulation, OnChanges } from '@angular/core';

@Component({
  selector: 'ko-table-panel',
  templateUrl: './koTablePanel.component.html',
  styleUrls: ['./koTablePanel.component.css']
})

export class KoTablePanelComponent implements OnChanges {

  @ViewChild('tableheader') tableheader: ElementRef;
  @ViewChild('tablebody') tablebody: ElementRef;

  @Input() height: string = '40px';

  topStyle;
  botStyle;

  constructor() {
  }

  ngOnChanges() {

    if (this.height == null) {
      this.height = '40px';
    }

    this.topStyle = {
      height: this.height
    };

    this.botStyle = {
      top: this.height
    };
  }

  updateScroll() {
    const header = this.tableheader.nativeElement as HTMLElement;
    const body = this.tablebody.nativeElement as HTMLElement;

    header.scrollLeft = body.scrollLeft;
  }
}
