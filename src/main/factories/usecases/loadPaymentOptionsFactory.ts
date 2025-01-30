import { RemotePaymentOption } from "../../../data/usecases/remoteLoadPaymentOptions";
import { LoadPaymentOptions } from "../../../domain/usecases/loadPaymentOptions";
import { makeAxiosHttpClient } from "../../../infra/axiosHttpClient/axiosHttpClientFactory";
import { makeApiUrl } from "../../../infra/http/apiUrlFactory";

export const makeLoadPaymentOptions = () : LoadPaymentOptions => new RemotePaymentOption(
    makeApiUrl("/payment/options"), makeAxiosHttpClient()
);