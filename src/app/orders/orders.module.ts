import { OrdersListComponent } from "./orders-list.component";
import { BrowserModule } from "@angular/platform-browser";
import { OrdersService } from "./orders.service";
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [OrdersListComponent],
  imports: [BrowserModule],
  providers: [OrdersService],
  bootstrap: [],
  exports: [OrdersListComponent]
})
export class OrdersModule {}
