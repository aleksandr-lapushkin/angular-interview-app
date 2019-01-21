import { Component, Input } from "@angular/core";
import { OrdersService } from "./orders.service";
import { Order } from "./order";

@Component({
  selector: "orders-list",
  templateUrl: "./orders-list.component.html",
  styleUrls: ["./orders-list.component.css"]
})
export class OrdersListComponent {
  constructor(private ordersService: OrdersService) {}
  // ngOnInit() {}
  // @Input() orders: Order[];
  title = "CodeSandbox";
  loaded = false;
  orders: Order[] = [];
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
}
