import type { Item } from "./item";

export interface Appetizer extends Item {
	values: {
		small: number | null;
		large: number | null;
	};
}
