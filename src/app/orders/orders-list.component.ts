import { Component, Input } from "@angular/core";
import { Order } from "./order";

@Component({
  selector: "orders-list",
  templateUrl: "./orders-list.component.html",
  styleUrls: ["./orders-list.component.css"]
})
export class OrdersListComponent {
  constructor() {}
  ngOnInit() {}
  @Input() orders: Order[];
}
