import type { Appetizer } from "../model/appetizer";

export interface LoadAppetizers {
	loadAppetizers(): Promise<Appetizer[]>;
}
