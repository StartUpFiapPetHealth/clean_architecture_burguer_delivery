import React from "react";


interface SignInModalProps {
    onHandleSubmit: () => void
}
export const SignInModal:React.FC<SignInModalProps> = ({onHandleSubmit}) => {
	return (
        <React.Fragment>
            <div className="fixed h-full w-full bg-black top-0 left-0 opacity-80"/>
            <div className=" fixed top-0 bottom-0  left-0 right-0  m-auto h-fit w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-2 ">Entre com a sua conta</h2>
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
                            href="#"
                            className="ms-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                        >
                            Lost Password?
                        </a>
                    </div>
                    <button
                        onClick={onHandleSubmit}
                        type="submit"
                        className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Entrar
                    </button>
                    <div className="text-sm font-medium text-gray-900 ">
                        Not registered yet?{" "}
                        <a
                            href="#"
                            className="text-blue-600 hover:underline dark:text-blue-500"
                        >
                            Create account
                        </a>
                    </div>
                </form>
            </div>
        </React.Fragment>
	);
};
