import { UnexpectedError } from "../../domain/errors/unexpectedError";
import { OrderParam } from "../../domain/model/order/orderParam";
import { OrderResponse } from "../../domain/model/order/orderResponse";
import { SubmitOrder } from "../../domain/usecases/submitOrder";
import { HttpClient, HttpMethod, HttpResponse, HttpStatusCode } from "../protocols/http";

export class RemoteSubmitOrder implements SubmitOrder{
    
    constructor(
        private readonly url : string,
        private readonly http : HttpClient
    ){};
    
    async submit(param: OrderParam): Promise<OrderResponse> {
        const response : HttpResponse = await this.http.request(
            {
                url:this.url,
                method: HttpMethod.POST,
                body : param
            }
        );

        if(response.statusCode == HttpStatusCode.created)
            return response.body;

        throw new UnexpectedError();
    }

}