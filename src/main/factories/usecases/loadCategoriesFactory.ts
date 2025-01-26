import { RemoteLoadCategories } from "../../../data/usecases/remoteLoadCategories"
import { LoadCategories } from "../../../domain/usecases/loadCategories"
import { makeAxiosHttpClient } from "../../../infra/axiosHttpClient/axiosHttpClientFactory"
import { makeApiUrl } from "../../../infra/http/apiUrlFactory"


export const makeLoadCategories = () : LoadCategories => {
    return new RemoteLoadCategories(makeApiUrl("/categories"), makeAxiosHttpClient());
};
