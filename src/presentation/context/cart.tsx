import type React from "react";

import {
	createContext,
	useCallback,
	useContext,
	useMemo,
	useState,
} from "react";
import type { Item } from "../../domain/model/item";

export type CartItem = {
	value: number;
	quantity: number;
	data: Item;
};

interface CartContext {
	cart: {
		items: Map<number, CartItem>;
		total: number;
	};

	addItemToCart: (item: CartItem) => void;
}

const Context = createContext({} as CartContext);

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [cart, setCart] = useState<CartContext["cart"]>({
		items: new Map(),
		total: 0,
	});

	const updateItem = useCallback(
		(item: CartItem) => {
			const updatedCart = cart;
			item.quantity += 1;
			updatedCart.total = updatedCart.total + item.value;
			updatedCart.items.set(item.data.id, item);
			setCart(() => ({ items: updatedCart.items, total: updatedCart.total }));
		},
		[cart],
	);

	const addItemToCart = useCallback(
		(item: CartItem) => {
			const {
				value,
				data: { id },
			} = item;

			const findItem = cart.items.get(id);

			if (findItem) {
				updateItem(item);
				return;
			}

			const updateditems = cart.items;
			updateditems.set(id, item);

			setCart((old) => ({
				total: old.total + value,
				items: old.items.set(id, item),
			}));
		},
		[cart, updateItem],
	);

	const removeItemFromCart = useCallback(
		(itemId: CartItem["data"]["id"]) => {
			const updatedCart = cart;

			const findItem = updatedCart.items.get(itemId);

			if (!findItem) return;

			updatedCart.total -= findItem.value * findItem.quantity;
			updatedCart.items.delete(itemId);
			setCart(updatedCart);
		},
		[cart],
	);

	const values = useMemo(
		() => ({
			addItemToCart,
			removeItemFromCart,
			cart,
		}),
		[addItemToCart, removeItemFromCart, cart],
	);

	return <Context.Provider value={values}>{children}</Context.Provider>;
};

const useCartContext = () => {
	return useContext(Context);
};

export { CartContextProvider, useCartContext };
