import { HttpClient, HttpMethod, HttpStatusCode } from '../protocols/http';
import { UnexpectedError } from '../../domain/errors/unexpectedError';
import { Beverage } from '../../domain/model/beverage';
import { LoadBeverages } from '../../domain/usecases/loadBeverages';

export class RemoteLoadBeverages implements LoadBeverages {
    constructor(
        private readonly url: string,
        private readonly httpClient: HttpClient<Beverage[]>
    ) { }

    async loadBeverages(): Promise<Beverage[]> {
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
