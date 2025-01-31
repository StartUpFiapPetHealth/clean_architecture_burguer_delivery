import type { DeleteStorage } from "../protocols/deleteStorage";
import type { GetStorage } from "../protocols/getStorage";
import type { SetStorage } from "../protocols/setStorage";

export class StorageAdapter implements SetStorage, GetStorage, DeleteStorage {
	set(key: string, value: object): void {
		if (value) {
			sessionStorage.setItem(key, JSON.stringify(value));
		} else {
			sessionStorage.removeItem(key);
		}
	}

	get(key: string): object {
		const storedData = sessionStorage.getItem(key);
		return JSON.parse(storedData as string);
	}

	delete(key: string): void {
		sessionStorage.removeItem(key);
	}
}
