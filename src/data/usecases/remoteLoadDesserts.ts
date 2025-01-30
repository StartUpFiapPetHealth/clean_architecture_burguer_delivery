import { HttpClient, HttpMethod, HttpStatusCode } from '../protocols/http';
import { UnexpectedError } from '../../domain/errors/unexpectedError';
import type { Dessert } from '../../domain/model/dessert';
import type { LoadDesserts } from '../../domain/usecases/loadDesserts';

export class RemoteLoadDesserts implements LoadDesserts {
    constructor(
        private readonly url: string,
        private readonly httpClient: HttpClient<Dessert[]>
    ) { }

    async loadDesserts(): Promise<Dessert[]> {
        const httpResponse = await this.httpClient.request({
            url: this.url,
            method: HttpMethod.GET,
        });

        if (httpResponse.statusCode === HttpStatusCode.ok && httpResponse.body) {
            return httpResponse.body;
        }

        throw new UnexpectedError();
    }
}
