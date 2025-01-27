import { OrderParam } from "../model/order/orderParam";
import { OrderResponse } from "../model/order/orderResponse";

export interface SubmitOrder{
    submit(param : OrderParam) : Promise<OrderResponse>;
};