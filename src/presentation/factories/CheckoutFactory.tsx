import { StorageAdapter } from "../../infra/cache/storageAdapter";
import { makeAuthentication } from "../../main/factories/usecases/authenticationFactory";
import { makeLoadPaymentOptions } from "../../main/factories/usecases/loadPaymentOptionsFactory";
import { makeSubmitOrder } from "../../main/factories/usecases/submitOrderFactory";
import { Checkout } from "../pages/Checkout";

const CheckoutFactory = () => {
	const loadPaymentOptions = makeLoadPaymentOptions();
	const authentication = makeAuthentication();
	const submitOrder = makeSubmitOrder();
	const storage = new StorageAdapter();
	return (
		<Checkout
			storage={storage}
			submitOrder={submitOrder}
			loadPaymentOptions={loadPaymentOptions}
			authentication={authentication}
		/>
	);
};

export { CheckoutFactory };
