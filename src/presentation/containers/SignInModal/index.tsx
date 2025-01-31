import React, { type FormEvent, useState } from "react";
import type { Authentication } from "../../../domain/usecases/authentication";
import type { StorageAdapter } from "../../../infra/cache/storageAdapter";

interface SignInModalProps {
	onHandleSubmit: Authentication;
	onClose: () => void;
	onSuccess: () => void;
	storage: StorageAdapter;
}
export const SignInModal: React.FC<SignInModalProps> = ({
	onHandleSubmit,
	onClose,
	onSuccess,
    storage
}) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		setError("");
		try {
			const { token } = await onHandleSubmit.login({ login: email, password });
			onSuccess();
            storage.set('@delivery_burger', { token })
		} catch (error) {
			console.error(error);
			setError("Erro ao realizar o login. Tente novamente mais tarde.");
		}
	};

	return (
		<React.Fragment>
			<button
				type="button"
				onClick={onClose}
				className="fixed h-full w-full bg-black top-0 left-0 opacity-80"
			/>
			<div className=" fixed top-0 bottom-0  left-0 right-0  m-auto h-fit w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl">
				<h2 className="text-2xl font-bold text-gray-900 mb-2 ">
					Entre com a sua conta
				</h2>
				<span>Entre com a sua conta para concluir o pedido</span>
				<form className="mt-8 space-y-6" action="#">
					<div>
						<label
							htmlFor="email"
							className="block mb-2 text-sm font-medium text-gray-900 "
						>
							Email
						</label>
						<input
							type="email"
							name="email"
							id="email"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
							placeholder="name@company.com"
							required
							onChange={(e) => setEmail(e.target.value)}
							value={email}
						/>
					</div>
					<div>
						<label
							htmlFor="password"
							className="block mb-2 text-sm font-medium text-gray-900 "
						>
							Senha
						</label>
						<input
							type="password"
							name="password"
							id="password"
							placeholder="••••••••"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
							required
							onChange={(e) => setPassword(e.target.value)}
							value={password}
						/>
					</div>
					<div className="flex items-start">
						<div className="flex items-center h-5">
							<input
								id="remember"
								aria-describedby="remember"
								name="remember"
								type="checkbox"
								className="w-4 h-4 border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
								required
							/>
						</div>
						<div className="ms-3 text-sm">
							<label
								htmlFor="remember"
								className="font-medium text-gray-500 dark:text-gray-400"
							>
								Remember this device
							</label>
						</div>
						<a
							// biome-ignore lint/a11y/useValidAnchor: <explanation>
							href="#"
							className="ms-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
						>
							Lost Password?
						</a>
					</div>
					{error && <p className="text-sm mb-2 text-red-700">{error}</p>}
					<button
						onClick={handleSubmit}
						type="submit"
						className="w-full px-5 py-3 text-base font-medium text-center text-white bg-yellow-600 rounded-lg hover:bg-yellow-700 focus:ring-4 sm:w-auto "
					>
						Entrar
					</button>
					<div className="text-sm font-medium text-gray-900 ">
						Ainda não tem uma conta?{" "}
						<a
							// biome-ignore lint/a11y/useValidAnchor: <explanation>
							href="#"
							className="text-blue-600 hover:underline dark:text-blue-500"
						>
							Criar conta
						</a>
					</div>
				</form>
			</div>
		</React.Fragment>
	);
};
