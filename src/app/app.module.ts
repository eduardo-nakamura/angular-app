import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { CustomersComponent } from './customers/customers.component';
import { CustomersModule } from './customers/customers.module';


@NgModule({
  imports:      [ BrowserModule, CustomersModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
