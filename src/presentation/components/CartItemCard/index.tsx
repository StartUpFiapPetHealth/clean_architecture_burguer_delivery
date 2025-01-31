import { Trash } from "lucide-react";
import { showCurrency } from "../../../utils/showCurrency";
import { TYPES, useCartContext, type CartItem } from "../../context/cart";
import { QuantityInput } from "../QuantityInput";

interface ICartItemCardProps {
	item: CartItem;
	variant?: "checkout" | "cart";
}

export const CartItemCard = ({
	item,
	variant = "cart",
}: ICartItemCardProps) => {
	let images = [];
	const { handleDecrementItem, handleIncrementItem, handleDeleteItemFromCart } = useCartContext();
	const totalValue = item?.value * item.quantity;
	const itemValue = variant === "cart" ? item.value : totalValue;

	if (typeof item.data.image === "string") {
		images.push(item?.data?.image);
	} else {
		images = item?.data?.image as string[];
	}

	return (
		<div className="bg-white rounded-sm shadow-md grid grid-cols-[160px_1fr]">
			<div className="w-40">
				<img
					src={images[0]}
					alt={item.data.title}
					className="w-100 h-34 object-cover rounded-sm"
				/>
			</div>
			<div className="w-full p-2">
				<div className="flex flex-col w-full">
					<div className="flex justify-between">
						<span className="font-medium text-sm">
							{item?.data?.title} {item.type ? `- ${TYPES[item.type]}` : ""}
						</span>
					</div>
					<span className="font-medium">{showCurrency(itemValue)}</span>
					<div>
						{variant === "cart" && (
							<div className="flex gap-4">
								<QuantityInput
									label="Qtd."
									defaultValue={item.quantity}
									onIncrement={() => handleIncrementItem(item)}
									onDecrement={() => handleDecrementItem(item)}
									value={item.quantity}
								/>
								<button onClick={() => handleDeleteItemFromCart(item)} type="button" className="bg-red-800 h-[20px] w-[20px] mt-auto flex items-center justify-center rounded-md">
									<Trash size={14}  color="white"/>
								</button>
							</div>
						)}

						{variant === "checkout" && <span>Qtd: {item.quantity}</span>}
						{variant === "cart" && (
							<span className="mt-4 text-sm font-semibold">
								Total: {showCurrency(totalValue)}
							</span>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
