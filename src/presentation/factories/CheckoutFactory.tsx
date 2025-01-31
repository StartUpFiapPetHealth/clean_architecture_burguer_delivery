import { makeLoadPaymentOptions } from "../../main/factories/usecases/loadPaymentOptionsFactory";
import { Checkout } from "../pages/Checkout";

const CheckoutFactory = () => {
	const loadPaymentOptions = makeLoadPaymentOptions()
	return (
		<Checkout loadPaymentOptions={loadPaymentOptions} />
	);
};

export { CheckoutFactory };
