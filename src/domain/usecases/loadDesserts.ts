import type { Dessert } from "../model/dessert";

export interface LoadDesserts {
	loadDesserts(): Promise<Dessert[]>;
}
