import { type HttpClient, HttpMethod, HttpStatusCode } from "../protocols/http";
import type { LoadBurgers } from "../../domain/usecases/loadBurgers";
import type { Burger } from "../../domain/model/burger";
import { LoadBurgersError } from "../../domain/errors/loadBurgersError";

export class RemoteLoadBurgers implements LoadBurgers {
	constructor(
		private readonly url: string,
		private readonly httpClient: HttpClient<Burger[]>,
	) {}

	async loadAll(): Promise<Burger[]> {
		const httpResponse = await this.httpClient.request({
			url: this.url,
			method: HttpMethod.GET,
		});

		if (httpResponse.statusCode === HttpStatusCode.ok && httpResponse.body) {
			return httpResponse.body;
		}

		throw new LoadBurgersError();
	}
}
