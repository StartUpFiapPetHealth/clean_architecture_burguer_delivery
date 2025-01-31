import type { OrderParam } from "../model/order/orderParam";
import type { OrderResponse } from "../model/order/orderResponse";

export interface SubmitOrder {
	submit(param: OrderParam, headers: object ): Promise<OrderResponse>;
}
