import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KoHorizontalScrollComponent } from './panels/koHorizontalScroll.component';
import { KoHorizontalSplitComponent } from './panels/koHorizontalSplit.component';
import { KoMainComponent } from './panels/koMain.component';
import { KoTitlePanelComponent } from './panels/koTitlePanel.component';
import { KoVerticalScrollComponent } from './panels/koVerticalScroll.component';
import { KoVerticalSplitComponent } from './panels/koVerticalSplit.component';
import { KoViewComponent } from './panels/koView.component';

import { KoButtonGroupComponent } from './forms/koButtonGroup.component';
import { KoDecimalDirective } from './forms/koDecimal.directive';
import { KoFocusDirective } from './forms/koFocus.directive';

import { KoAlertComponent } from './message/koAlert.component';

import { KoOverDirective } from './navigation/koOver.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    KoHorizontalScrollComponent,
    KoHorizontalSplitComponent,
    KoMainComponent,
    KoTitlePanelComponent,
    KoVerticalScrollComponent,
    KoVerticalSplitComponent,
    KoViewComponent,

    KoButtonGroupComponent,
    KoDecimalDirective,
    KoFocusDirective,

    KoAlertComponent,

    KoOverDirective
  ],
  exports: [
    KoMainComponent,
    KoHorizontalSplitComponent,
    KoHorizontalScrollComponent,
    KoTitlePanelComponent,
    KoVerticalScrollComponent,
    KoVerticalSplitComponent,
    KoViewComponent,

    KoButtonGroupComponent,
    KoDecimalDirective,
    KoFocusDirective,

    KoAlertComponent,

    KoOverDirective
  ]
})
export class KiponUiModule { }
