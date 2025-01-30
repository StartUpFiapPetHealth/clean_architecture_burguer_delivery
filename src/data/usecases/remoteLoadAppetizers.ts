import { UnexpectedError } from "../../domain/errors/unexpectedError";
import type { Appetizer } from "../../domain/model/appetizer";
import type { LoadAppetizers } from "../../domain/usecases/loadAppetizers";
import { HttpClient, HttpMethod, HttpResponse, HttpStatusCode } from "../protocols/http";

export class RemoteLoadAppetizers implements LoadAppetizers{

    constructor(private readonly url : string,
        private readonly http : HttpClient
    ){}

    async loadAppetizers(): Promise<Appetizer[]> {
        const response :  HttpResponse = await this.http.request({
            url : this.url,
            method : HttpMethod.GET
        });

        if(response.statusCode == HttpStatusCode.ok && response.body)
            return response.body;

        throw new UnexpectedError();
    }

    
}