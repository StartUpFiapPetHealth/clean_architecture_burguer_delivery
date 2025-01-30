import type { Item } from "./item";

export interface Burger extends Item {
	values: {
		single: number;
		combo: number;
	};
}
