import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from  './shared/shared.module';

import { AppComponent } from './app.component';
// import { CustomersComponent } from './customers/customers.component';
import { CustomersModule } from './customers/customers.module';


@NgModule({
  imports:      [ BrowserModule, CustomersModule,SharedModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
