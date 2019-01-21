import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { OrdersModule } from "./orders/orders.module";
import { OrderFormComponent } from "./orders/order-form.component";
import { OrdersListComponent } from "./orders/orders-list.component";
import { LoaderModule } from "./loader/loader.module";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";

const appRoutes: Routes = [
  { path: "orders", component: OrdersListComponent },
  { path: "", pathMatch: "full", redirectTo: "/orders" },
  { path: "orders/new", component: OrderFormComponent }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule,
    OrdersModule,
    LoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
