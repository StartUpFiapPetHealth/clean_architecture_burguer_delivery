import type { Burger } from "../model/burger";

export interface LoadBurgers {
	loadAll(): Promise<Burger[]>;
}
