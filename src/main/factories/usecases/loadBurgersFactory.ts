import { RemoteLoadBurgers } from "../../../data/usecases/remoteLoadBurgers";
import type { LoadBurgers } from "../../../domain/usecases/loadBurgers";
import { makeAxiosHttpClient } from "../../../infra/axiosHttpClient/axiosHttpClientFactory";
import { makeApiUrl } from "../../../infra/http/apiUrlFactory";

export const makeLoadBurgers = (): LoadBurgers => {
	return new RemoteLoadBurgers(
		makeApiUrl("/hamburgers"),
		makeAxiosHttpClient(),
	);
};
