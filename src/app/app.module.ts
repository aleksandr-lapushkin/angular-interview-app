import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import {OrdersModule} from "./orders/orders.module";
import {LoaderModule} from "./loader/loader.module";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, OrdersModule, LoaderModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
