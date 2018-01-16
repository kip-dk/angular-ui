import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KoMainComponent } from './koMain.component';
import { KoHorizontalSplitComponent } from './koHorizontalSplit.component';
import { KoVerticalSplitComponent } from './koVerticalSplit.component';
import { KoViewComponent } from './koView.component';

export * from './koMain.component';
export * from './koHorizontalSplit.component';
export * from './koVerticalSplit.component';
export * from './koView.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      KoMainComponent,
      KoHorizontalSplitComponent,
      KoVerticalSplitComponent,
      KoViewComponent
  ],
  exports: [
      KoMainComponent,
      KoHorizontalSplitComponent,
      KoVerticalSplitComponent,
      KoViewComponent
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
