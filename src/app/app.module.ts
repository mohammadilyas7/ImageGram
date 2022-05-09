import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FlowerBitComponent } from './flower-bit/flower-bit.component';
import { FlowerBundleDirective } from './flower-bundle.directive';

@NgModule({
  declarations: [
    AppComponent,
    FlowerBitComponent,
    FlowerBundleDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
