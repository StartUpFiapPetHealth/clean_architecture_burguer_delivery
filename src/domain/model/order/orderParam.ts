import type { Item } from "./item";

export interface OrderParam {
	items: Item[];
	paymentOption: string;
}
