import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmpeladoHijoComponent } from './empelado-hijo/empelado-hijo.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpeladoHijoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
