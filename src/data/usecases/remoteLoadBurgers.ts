import { HttpClient, HttpMethod, HttpStatusCode } from '../protocols/http';
import { LoadBurgers, Burger } from '../../domain/usecases/loadBurgers';
import { UnexpectedError } from '../../domain/errors/unexpectedError';

export class RemoteLoadBurgers implements LoadBurgers {
    constructor(
        private readonly url: string,
        private readonly httpClient: HttpClient<Burger[]>
    ) { }

    async loadAll(): Promise<Burger[]> {
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
