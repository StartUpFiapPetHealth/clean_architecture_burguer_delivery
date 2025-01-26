import { RemoteLoadBeverages } from "../../../data/usecases/remoteLoadBeverages";
import { LoadBeverages } from "../../../domain/usecases/loadBeverages";
import { makeAxiosHttpClient } from "../../../infra/axiosHttpClient/axiosHttpClientFactory";
import { makeApiUrl } from "../../../infra/http/apiUrlFactory";

export const makeLoadBeverages = () : LoadBeverages =>{
    return new RemoteLoadBeverages(makeApiUrl("/beverages"), makeAxiosHttpClient());
};