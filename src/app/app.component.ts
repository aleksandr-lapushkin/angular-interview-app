import { Component } from "@angular/core";
import { OrdersService } from "./orders/orders.service";
import { Order } from "./orders/order";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private ordersService: OrdersService) {}
  fetchAllOrders() {
    this.loaded = false;
    this.ordersService.fetchAll().subscribe((data: Order[]) => {
      this.orders = data;
      this.loaded = true;
    });
  }
  ngOnInit() {
    this.fetchAllOrders();
  }
  title = "CodeSandbox";
  loaded = false;
  orders: Order[] = [];
}
