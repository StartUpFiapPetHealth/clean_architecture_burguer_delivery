import type { Category } from "../model/category";

export interface LoadCategories {
	loadAll(): Promise<Category[]>;
}
