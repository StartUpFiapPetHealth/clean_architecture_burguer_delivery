import { UnexpectedError } from "../../domain/errors/unexpectedError";
import type { OrderParam } from "../../domain/model/order/orderParam";
import type { OrderResponse } from "../../domain/model/order/orderResponse";
import type { SubmitOrder } from "../../domain/usecases/submitOrder";
import {
	type HttpClient,
	HttpMethod,
	type HttpResponse,
	HttpStatusCode,
} from "../protocols/http";

export class RemoteSubmitOrder implements SubmitOrder {
	constructor(
		private readonly url: string,
		private readonly http: HttpClient,
	) {}

	async submit(param: OrderParam, headers: object): Promise<OrderResponse> {
		const response: HttpResponse = await this.http.request({
			url: this.url,
			method: HttpMethod.POST,
			body: param,
            headers
		});

		if (response.statusCode === HttpStatusCode.ok) return response.body;

		throw new UnexpectedError(); 
	}
}
