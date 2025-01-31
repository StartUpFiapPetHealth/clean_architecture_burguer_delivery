import { UnexpectedError } from "../../domain/errors/unexpectedError";
import { AuthenticationParam } from "../../domain/model/auth/authParam";
import { AuthenticationResponse } from "../../domain/model/auth/authResponse";
import { Authentication } from "../../domain/usecases/authentication";
import { HttpClient, HttpMethod, HttpResponse, HttpStatusCode } from "../protocols/http";

export class RemoteAuthentication implements Authentication
{
    constructor(
        private readonly url : string,
        private readonly http : HttpClient
    ){};
    
    async login(authParam: AuthenticationParam): Promise<AuthenticationResponse> {
        const response : HttpResponse = await this.http.request(
            {
                url:this.url,
                method: HttpMethod.POST,
                body : authParam
            }
        );

        if(response.statusCode == HttpStatusCode.created)
            return response.body;

        throw new UnexpectedError();
            
    }
    
}