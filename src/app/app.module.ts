import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConsumptionDetailsComponent } from './water/consumption-details/consumption-details.component';
import { ConsumptionEntryComponent } from './water/consumption-entry/consumption-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsumptionDetailsComponent,
    ConsumptionEntryComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
