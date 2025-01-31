import type React from "react";

import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";
import type { Item } from "../../domain/model/item";

export enum TYPES  {
	'combo'=  'Combo',
	'single' = 'Lanche',
	'large' = 'Grande',
	'small' = 'Pequena'
}

export type CartItem = {
	value: number;
	quantity: number;
	data: Item;
	type?: 'combo' | 'single' | 'large' | 'small'
};

interface CartContext {
	cart: {
		items: CartItem[];
		total: number;
	};
	addItemToCart: (item: CartItem) => void;
	handleDecrementItem: (item: CartItem) => void;
	handleIncrementItem: (item: CartItem) => void;
	handleResetCart: () => void;
	items: CartItem[];
}

const Context = createContext({} as CartContext);

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [cart, setCart] = useState<CartContext["cart"]>(() => {
		const cartFromStorage = sessionStorage.getItem("cart");

		if (cartFromStorage) return  {
			items: JSON.parse(cartFromStorage).items,
			total: JSON.parse(cartFromStorage).total,
		};

		return {
			items: [],
			total: 0,
		};
	});

	useEffect(() => {
		sessionStorage.setItem("cart", JSON.stringify({...cart, items: Array.from(cart.items)}));
	}, [cart]);

	const handleIncrementItem = useCallback(
		(item: CartItem) => {
			const updatedCart = cart;
			item.quantity = item.quantity + 1;
			updatedCart.total = updatedCart.total + item.value;
			updatedCart.items.map(el => el.data.id === item.data.id && el.value === item.value ? item : el);
			setCart(() => ({ items: updatedCart.items, total: updatedCart.total }));
		},
		[cart],
	);

	const handleDecrementItem = useCallback(
		(item: CartItem) => {
			const updatedCart = cart;
			item.quantity = item.quantity - 1;
			updatedCart.total = updatedCart.total - item.value;
			updatedCart.items.map(el => el.data.id === item.data.id && el.value === item.value ? item : el);
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

			const findItem = cart.items.find(item => item?.data?.id === id)

			alert(`${item.data.title} ${item.type ? TYPES[item.type] : ''} adicionado ao carrinho.`);

			if (findItem && item.value === findItem.value) {
				handleIncrementItem(findItem);
				return;
			}

			const updateditems = cart.items;
			updateditems.push(item);

			setCart((old) => ({
				total: old.total + value,
				items: updateditems,
			}));
		},
		[cart, handleIncrementItem],
	);

	const removeItemFromCart = useCallback(
		(itemId: CartItem["data"]["id"]) => {
			const updatedCart = cart;

			const findItem = updatedCart.items.find(item => itemId === item.data.id);

			if (!findItem) return;

			updatedCart.total -= findItem.value * findItem.quantity;
			updatedCart.items.filter(item => item.data.id !== itemId);
			setCart(updatedCart);
		},
		[cart],
	);

	const handleResetCart = useCallback(() => {
		setCart({	
			items: [],
			total: 0
		})
	},[])

	const values = useMemo(
		() => ({
			addItemToCart,
			removeItemFromCart,
			handleDecrementItem,
			handleIncrementItem,
			cart,
			items: cart.items,
			handleResetCart,
		}),
		[
			cart,
			addItemToCart,
			removeItemFromCart,
			handleDecrementItem,
			handleIncrementItem,
			handleResetCart,
		],
	);

	return <Context.Provider value={values}>{children}</Context.Provider>;
};

const useCartContext = () => {
	return useContext(Context);
};

export { CartContextProvider, useCartContext };
