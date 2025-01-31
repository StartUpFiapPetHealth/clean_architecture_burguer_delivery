import { UnexpectedError } from "../../domain/errors/unexpectedError";
import type { AuthenticationParam } from "../../domain/model/auth/authParam";
import type { AuthenticationResponse } from "../../domain/model/auth/authResponse";
import type { Authentication } from "../../domain/usecases/authentication";
import {
	type HttpClient,
	HttpMethod,
	type HttpResponse,
	HttpStatusCode,
} from "../protocols/http";

export class RemoteAuthentication implements Authentication {
	constructor(
		private readonly url: string,
		private readonly http: HttpClient,
	) {}

	async login(authParam: AuthenticationParam): Promise<AuthenticationResponse> {
		const response: HttpResponse = await this.http.request({
			url: this.url,
			method: HttpMethod.POST,
			body: authParam,
		});

		if (response.statusCode === HttpStatusCode.ok) return response.body;

		throw new UnexpectedError();
	}
}
