import { OrdersService } from "./orders.service";
import { Order } from "./order";
import OrderStatus from "./order-status";

let httpClientSpy: { get: jasmine.Spy };
let ordersService: OrdersService;

beforeEach(() => {
  // TODO: spy on other methods too
  httpClientSpy = jasmine.createSpyObj("HttpClient", ["get"]);
  ordersService = new OrdersService(<any>httpClientSpy);
});

it("should return expected heroes (HttpClient called once)", () => {
  const expectedOrders: Order[] = [
    { id: 0, title: "hello", status: OrderStatus.PROCESSING }
  ];

  httpClientSpy.get.and.returnValue(asyncData(expectedOrders));

  ordersService
    .fetchAll()
    .subscribe(
      heroes => expect(heroes).toEqual(expectedOrders, "expected orders"),
      fail
    );
  expect(httpClientSpy.get.calls.count()).toBe(1, "one call");
});
