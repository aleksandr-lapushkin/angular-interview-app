import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { OrdersModule } from "./orders.module";
import { Order } from "./order";

@Injectable()
export class OrdersService {
  constructor(private http: HttpClient) {}
  public fetchAll() {
    return this.http.get("https://c098da06.ngrok.io/orders");
  }
  public saveOrder() {
    //TODO: implement and test
  }
}
