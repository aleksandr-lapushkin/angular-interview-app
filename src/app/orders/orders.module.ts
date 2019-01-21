import { OrdersListComponent } from "./orders-list.component";
import { OrderFormComponent } from "./order-form.component";
import { RouterModule, Routes } from "@angular/router";
import { LoaderModule } from "../loader/loader.module";
import { BrowserModule } from "@angular/platform-browser";
import { OrdersService } from "./orders.service";
import { NgModule } from "@angular/core";

const routes: Routes = [{ path: "orders/new", component: OrderFormComponent }];

@NgModule({
  declarations: [OrdersListComponent, OrderFormComponent],
  imports: [RouterModule.forChild(routes), LoaderModule, BrowserModule],
  providers: [OrdersService],
  bootstrap: [],
  exports: [OrdersListComponent, OrderFormComponent]
})
export class OrdersModule {}
