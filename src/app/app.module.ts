import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { cloverComponent } from './clover/clover.component';
import { CustomerComponent } from './Customer/customer.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    cloverComponent,
    CustomerComponent,
  ],
  bootstrap: [AppComponent, cloverComponent, CustomerComponent],
})
export class AppModule {}
