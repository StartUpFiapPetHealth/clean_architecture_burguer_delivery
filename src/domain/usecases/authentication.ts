import type { AuthenticationParam } from "../model/auth/authParam";
import type { AuthenticationResponse } from "../model/auth/authResponse";

export interface Authentication {
	login(authParam: AuthenticationParam): Promise<AuthenticationResponse>;
}
