import { AppError } from "./appError";

class LoadBurgersError extends AppError {
	constructor() {
		super('Erro ao carregar os hamburgueres. Tente novamente mais tarde.');
		this.name = "AppError";
	}
}


export {LoadBurgersError}