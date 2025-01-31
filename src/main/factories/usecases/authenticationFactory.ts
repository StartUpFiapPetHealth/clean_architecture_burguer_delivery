import { RemoteAuthentication } from "../../../data/usecases/remoteAuthentication";
import { Authentication } from "../../../domain/usecases/authentication";
import { makeAxiosHttpClient } from "../../../infra/axiosHttpClient/axiosHttpClientFactory";
import { makeApiUrl } from "../../../infra/http/apiUrlFactory";


export const makeAuthentication = () : Authentication =>{
    return new RemoteAuthentication(makeApiUrl("/user/login"), makeAxiosHttpClient());
}