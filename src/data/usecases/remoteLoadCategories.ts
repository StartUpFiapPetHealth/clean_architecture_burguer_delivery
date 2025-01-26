import { UnexpectedError } from "../../domain/errors/unexpectedError";
import { Category } from "../../domain/model/category";
import { LoadCategories } from "../../domain/usecases/loadCategories";
import { HttpClient, HttpMethod, HttpResponse, HttpStatusCode } from "../protocols/http";

export class RemoteLoadCategories implements LoadCategories{

    constructor(
        private readonly url : string,
        private readonly http : HttpClient<Category[]>
    ){}

    async loadAll(): Promise<Category[]> {
        const response : HttpResponse = await this.http.request( 
            {
                url : this.url,
                method : HttpMethod.GET
            });

        if (response.statusCode === HttpStatusCode.ok && response.body) {
            return response.body;
        }

        throw new UnexpectedError();
    }

}