import { RemoteLoadDesserts } from "../../../data/usecases/remoteLoadDesserts";
import type { LoadDesserts } from "../../../domain/usecases/loadDesserts";
import { makeAxiosHttpClient } from "../../../infra/axiosHttpClient/axiosHttpClientFactory";
import { makeApiUrl } from "../../../infra/http/apiUrlFactory";

export const makeLoadDesserts = () : LoadDesserts =>{
    return new RemoteLoadDesserts(makeApiUrl("/desserts"), makeAxiosHttpClient());
};