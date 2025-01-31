import { useCallback, useEffect, useState } from "react";
import { CartItemCard } from "../../components/CartItemCard";
import { useCartContext } from "../../context/cart";
import type { LoadPaymentOptions } from "../../../domain/usecases/loadPaymentOptions";
import type { PaymentOption } from "../../../domain/model/paymentOption";
import { showCurrency } from "../../../utils/showCurrency";
import { SignInModal } from "../../containers/SignInModal";

interface ICheckoutProps {
	loadPaymentOptions: LoadPaymentOptions;
}
export const Checkout: React.FC<ICheckoutProps> = ({ loadPaymentOptions }) => {
	const [paymentOptions, setPaymentOptions] = useState<PaymentOption[]>([]);
    const [signInModalIsOpen,setSignInModalIsOpen] = useState(false)
	const { items, cart } = useCartContext();

	const fetchPaymentOptions = useCallback(async () => {
		try {
			const options = await loadPaymentOptions.loadPaymentOptions();
			setPaymentOptions(options);
		} catch (error) {}
	}, [loadPaymentOptions]);

	useEffect(() => {
		fetchPaymentOptions();
	}, [fetchPaymentOptions]);

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
									value=""
									name="default-radio"
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
					<button onClick={() => setSignInModalIsOpen(true)} type="button" className="bg-black px-8 py-2 text-white mt-4">
						Finalizar pedido
					</button>
				</div>
			</div>

            {signInModalIsOpen && <SignInModal/>}
		</div>
	);
};
