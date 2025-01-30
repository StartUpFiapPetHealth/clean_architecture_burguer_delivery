import { UnexpectedError } from "../../domain/errors/unexpectedError";
import { PaymentOption } from "../../domain/model/paymentOption";
import { LoadPaymentOptions } from "../../domain/usecases/loadPaymentOptions";
import { HttpClient, HttpMethod, HttpResponse, HttpStatusCode } from "../protocols/http";

export class RemotePaymentOption implements LoadPaymentOptions{
    
    constructor(private readonly url : string,
        private readonly httpClient : HttpClient<PaymentOption[]>
    ){};

    async loadPaymentOptions(): Promise<PaymentOption[]> {
        const response : HttpResponse =  await this.httpClient.request({
            url : this.url,
            method : HttpMethod.GET
        });
        
        if (response.statusCode === HttpStatusCode.ok && response.body) {
            return response.body;
        }

        throw new UnexpectedError();
    }

}