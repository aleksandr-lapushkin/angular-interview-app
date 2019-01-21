import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { OrdersModule } from "./orders.module";
import { Order } from "./order";

@Injectable()
export class OrdersService {
  constructor(private http: HttpClient) {}
  public fetchAll() {
    return this.http.get("https://9b923f7e.ngrok.io/orders");
  }
}
