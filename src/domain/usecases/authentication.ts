import { AuthenticationParam } from "../model/auth/authParam";
import { AuthenticationResponse } from "../model/auth/authResponse";

export interface Authentication{

    login(authParam : AuthenticationParam) : Promise<AuthenticationResponse>;
}