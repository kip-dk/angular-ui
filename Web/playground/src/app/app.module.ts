import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { KiponUIModule } from 'kipon-ui';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      KiponUIModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
