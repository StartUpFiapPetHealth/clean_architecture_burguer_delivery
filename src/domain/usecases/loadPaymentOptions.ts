import type { PaymentOption } from "../model/paymentOption";

export interface LoadPaymentOptions {
	loadPaymentOptions(): Promise<PaymentOption[]>;
}
