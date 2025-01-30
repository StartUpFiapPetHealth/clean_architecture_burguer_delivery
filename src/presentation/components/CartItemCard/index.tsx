import { showCurrency } from "../../../utils/showCurrency";
import type { CartItem } from "../../context/cart";
import { QuantityInput } from "../QuantityInput";

interface ICartItemCardProps {
	item: CartItem;
}

export const CartItemCard = ({ item }: ICartItemCardProps) => {
	let images = [];

	if (!item?.data?.image.length) {
		images.push(item?.data?.image);
	} else {
		images = item?.data?.image as string[];
	}

	return (
        <div className="bg-white rounded-sm shadow-md grid grid-cols-[160px_1fr]">
            <div className="w-40">
                <img src={item?.data?.image[0]} alt="" className="w-100 h-30 object-cover rounded-sm" />
            </div>
            <div className="w-40 p-2">
                <div className="flex flex-col">
                    <span className="font-medium">{item?.data?.title}</span>
                    <span className="font-medium">{showCurrency(item?.value)}</span>
                    <QuantityInput label="Qtd"/>
                </div>
            </div>
        </div>
    )
};
