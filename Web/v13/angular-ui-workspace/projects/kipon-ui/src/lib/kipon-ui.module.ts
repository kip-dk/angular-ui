import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KoHorizontalScrollComponent } from './panels/koHorizontalScroll.component';
import { KoHorizontalSplitComponent } from './panels/koHorizontalSplit.component';
import { KoMainComponent } from './panels/koMain.component';
import { KoTitlePanelComponent } from './panels/koTitlePanel.component';
import { KoVerticalScrollComponent } from './panels/koVerticalScroll.component';
import { KoVerticalSplitComponent } from './panels/koVerticalSplit.component';
import { KoViewComponent } from './panels/koView.component';
import { KoExpansionPanelComponent } from './panels/koExpansionPanel.component';
import { KoTablePanelComponent } from './panels/koTablePanel.component';

import { KoButtonGroupComponent } from './forms/koButtonGroup.component';
import { KoDecimalDirective } from './forms/koDecimal.directive';
import { KoFocusDirective } from './forms/koFocus.directive';

import { KoAlertComponent } from './message/koAlert.component';
import { KoHeaderComponent } from './message/koHeader.component';

import { KoOverDirective } from './navigation/koOver.directive';
import { KoTopMenuComponent } from './navigation/koTopMenu.component';
import { KoLeftMenuComponent } from './navigation/koLeftMenu.component';
import { KoWriteDirective } from './message/koWrite.directive';

import { KoNavigation, KoDivider, KoNavigationByCssClass, KoNavigationByImageUrl } from './models/navigation.interface';

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
    KoExpansionPanelComponent,
    KoTablePanelComponent,

    KoButtonGroupComponent,
    KoDecimalDirective,
    KoFocusDirective,

    KoAlertComponent,
    KoHeaderComponent,

    KoOverDirective,
    KoTopMenuComponent,
    KoLeftMenuComponent,

    KoWriteDirective,
  ],
  exports: [
    KoMainComponent,
    KoHorizontalSplitComponent,
    KoHorizontalScrollComponent,
    KoTitlePanelComponent,
    KoVerticalScrollComponent,
    KoVerticalSplitComponent,
    KoViewComponent,
    KoExpansionPanelComponent,
    KoTablePanelComponent,

    KoButtonGroupComponent,
    KoDecimalDirective,
    KoFocusDirective,

    KoAlertComponent,
    KoHeaderComponent,

    KoOverDirective,
    KoTopMenuComponent,
    KoLeftMenuComponent,
    KoWriteDirective
  ]
})
export class KiponUiModule { }
