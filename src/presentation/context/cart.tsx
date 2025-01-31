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
	handleDeleteFromCart: (item: CartItem) => void;
	handleResetCart: () => void;
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
		sessionStorage.setItem("cart", JSON.stringify(cart));
	}, [cart]);

	const handleIncrementItem = useCallback(
		(item: CartItem) => {
			const updatedCart = cart;
			item.quantity = item.quantity + 1;
			updatedCart.total = updatedCart.total + item.value;
			updatedCart.items.map(el => el.data.id === item.data.id &&  item.type === el.type ? item : el);
			setCart(() => ({ items: updatedCart.items, total: updatedCart.total }));
		},
		[cart],
	);

	const handleDecrementItem = useCallback(
		(item: CartItem) => {
			const updatedCart = cart;
			item.quantity = item.quantity - 1;
			updatedCart.total = updatedCart.total - item.value;
			updatedCart.items.map(el => el.data.id === item.data.id && item.type === el.type ? item : el);
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

			const findItem = cart.items.find(el => el?.data?.id === id && item.type === el.type)

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

	const handleDeleteFromCart = useCallback(
		(item: CartItem) => {
			const updatedItems = cart.items.filter( el => el !== item)
			const updatedTotal = cart.total - (item.value * item.quantity)
			setCart(() => ({
				total: updatedTotal,
				items: updatedItems,
			}));
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
			handleDecrementItem,
			handleIncrementItem,
			cart,
			handleResetCart,
			handleDeleteFromCart
		}),
		[
			cart,
			addItemToCart,
			handleDecrementItem,
			handleIncrementItem,
			handleResetCart,
			handleDeleteFromCart
		],
	);

	return <Context.Provider value={values}>{children}</Context.Provider>;
};

const useCartContext = () => {
	return useContext(Context);
};

export { CartContextProvider, useCartContext };
