import { useCallback, useEffect, useState } from "react";
import { CartItemCard } from "../../components/CartItemCard";
import { useCartContext } from "../../context/cart";
import { SignInModal } from "../../containers/SignInModal";
import { showCurrency } from "../../../utils/showCurrency";
import type { LoadPaymentOptions } from "../../../domain/usecases/loadPaymentOptions";
import type { PaymentOption } from "../../../domain/model/paymentOption";
import type { Authentication } from "../../../domain/usecases/authentication";
import type { SubmitOrder } from "../../../domain/usecases/submitOrder";
import type { StorageAdapter } from "../../../infra/cache/storageAdapter";
import { useNavigate } from "react-router-dom";

interface ICheckoutProps {
	loadPaymentOptions: LoadPaymentOptions;
	authentication: Authentication;
	submitOrder: SubmitOrder;
	storage: StorageAdapter;
}
export const Checkout: React.FC<ICheckoutProps> = ({
	loadPaymentOptions,
	authentication,
	submitOrder,
	storage,
}) => {
	const [paymentOptions, setPaymentOptions] = useState<PaymentOption[]>([]);
	const [signInModalIsOpen, setSignInModalIsOpen] = useState(false);
	const [chosenOption, setChosenOption] = useState("");

	const { items, cart, handleResetCart } = useCartContext();

	const navigate = useNavigate();

	const fetchPaymentOptions = useCallback(async () => {
		try {
			const options = await loadPaymentOptions.loadPaymentOptions();
			setPaymentOptions(options);
		} catch (error) {}
	}, [loadPaymentOptions]);

	useEffect(() => {
		fetchPaymentOptions();
	}, [fetchPaymentOptions]);

	const handleSubmitOrder = async () => {
		const payloadItems = items.map((item) => ({
			value: item.value,
			title: item.data.title,
		}));
		try {
			await submitOrder.submit(
				{
					items: payloadItems,
					paymentOption: chosenOption,
				},
				{
					Authorization: `Bearer ${storage.get("@delivery_burger")}`,
				},
			);

			alert("Pedido feito com sucesso!");
            handleResetCart()
			setSignInModalIsOpen(false);
			navigate("/");
		} catch (error) {
			console.error(error);
			alert("Erro ao realizar o pedido. Tente novamente mais tarde.");
		}
	};

	const handleSubmit = () => {
		const isAuthenticated = storage.get("@delivery_burger");
		if (isAuthenticated) return handleSubmitOrder();

		setSignInModalIsOpen(true);
	};

	return (
		<div className="p-4">
			<h2 className="mb-4">Checkout</h2>
			<div className="grid grid-cols-2 gap-4">
				<div className="flex flex-col gap-4">
					{items.map((item) => (
						<CartItemCard variant="checkout" key={item.data.id} item={item} />
					))}
				</div>
				<div>
					<h2>Opções de pagamento</h2>
					<div className="flex gap-2 flex-col mt-4">
						{paymentOptions.map((option) => (
							<div key={option.id} className="flex items-center mb-4">
								<input
									id="default-radio-1"
									type="radio"
									value={option.id}
									name="default-radio"
									onClick={() => setChosenOption(option.id)}
									className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
								/>
								<label
									htmlFor="default-radio-1"
									className="ms-2 text-sm font-medium text-gray-900 "
								>
									{option.text}
								</label>
							</div>
						))}
					</div>
					<h3 className="mt-8 font-semibold text-2xl">
						Total: {showCurrency(cart.total)}
					</h3>
					<button
						onClick={handleSubmit}
						type="button"
						className="bg-black px-8 py-2 text-white mt-4"
					>
						Finalizar pedido
					</button>
				</div>
			</div>

			{signInModalIsOpen && (
				<SignInModal
					onClose={() => setSignInModalIsOpen(false)}
					onSuccess={() => handleSubmitOrder()}
					onHandleSubmit={authentication}
					storage={storage}
				/>
			)}
		</div>
	);
};
