import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CustomerComponent } from '../Customer/customer.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [],
  bootstrap: [CustomerComponent],
})
export class CustomerModule {}
