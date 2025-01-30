import { RemoteLoadAppetizers } from "../../../data/usecases/remoteLoadAppetizers";
import type { LoadAppetizers } from "../../../domain/usecases/loadAppetizers";
import { makeAxiosHttpClient } from "../../../infra/axiosHttpClient/axiosHttpClientFactory";
import { makeApiUrl } from "../../../infra/http/apiUrlFactory";

export const makeLoadAppetizers = () : LoadAppetizers =>{
    return new RemoteLoadAppetizers(makeApiUrl("/appetizers"), makeAxiosHttpClient());
};
