import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KoMainComponent } from './koMain.component';
import { KoHorizontalSplitComponent } from './koHorizontalSplit.component';
import { KoHorizontalScrollComponent } from './koHorizontalScroll.component';
import { KoVerticalSplitComponent } from './koVerticalSplit.component';
import { KoVerticalScrollComponent } from './koVerticalScroll.component';
import { KoViewComponent } from './koView.component';
import { KoButtonGroupComponent } from './koButtonGroup.component';
import { KoDecimalDirective } from './koDecimal.directive';

export * from './koMain.component';
export * from './koHorizontalSplit.component';
export * from './koHorizontalScroll.component';
export * from './koVerticalSplit.component';
export * from './koVerticalScroll.component';
export * from './koView.component';
export * from './koButtonGroup.component';
export * from './koDecimal.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      KoMainComponent,
      KoHorizontalSplitComponent,
      KoHorizontalScrollComponent,
      KoVerticalSplitComponent,
      KoVerticalScrollComponent,
      KoViewComponent,
      KoButtonGroupComponent,
      KoDecimalDirective
  ],
  exports: [
      KoMainComponent,
      KoHorizontalSplitComponent,
      KoHorizontalScrollComponent,
      KoVerticalSplitComponent,
      KoVerticalScrollComponent,
      KoViewComponent,
      KoButtonGroupComponent,
      KoDecimalDirective
  ]
})
export class KiponUIModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: KiponUIModule,
      providers: []
    };
  }
}
