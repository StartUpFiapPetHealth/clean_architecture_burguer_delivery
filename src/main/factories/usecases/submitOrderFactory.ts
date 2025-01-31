import { RemoteSubmitOrder } from "../../../data/usecases/remoteSubmitOrder";
import type { SubmitOrder } from "../../../domain/usecases/submitOrder";
import { makeAxiosHttpClient } from "../../../infra/axiosHttpClient/axiosHttpClientFactory";
import { makeApiUrl } from "../../../infra/http/apiUrlFactory";

export const makeSubmitOrder = (): SubmitOrder => {
	return new RemoteSubmitOrder(
		makeApiUrl("/order/create-order"),
		makeAxiosHttpClient(),
	);
};
