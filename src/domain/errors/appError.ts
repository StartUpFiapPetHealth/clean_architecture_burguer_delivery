class AppError extends Error {
	constructor(message: string) {
		super(message);
		this.name = "AppError";
	}
}


export {AppError}