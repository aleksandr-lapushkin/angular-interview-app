import { Component, Input } from "@angular/core";
import { Order } from "./order";
import OrderStatus from "./order-status";

@Component({
  selector: "order-form",
  templateUrl: "./order-form.component.html",
  styleUrls: []
})
export class OrderFormComponent {
  constructor() {}
  ngOnInit() {}
  statuses = Object.keys(OrderStatus);
}
