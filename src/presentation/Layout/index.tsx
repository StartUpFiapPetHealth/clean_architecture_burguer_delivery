import type React from "react";
import { useCartContext } from "../context/cart";
import { CartItemCard } from "../components/CartItemCard";

export const Layout = ({ children }: { children: React.ReactNode }) => {
	const { cart } = useCartContext();

    const items = Array.from(cart.items.entries())

	return (
		<div>
            {/* <div className="fixed top-0 left-0 right-0 h-full w-full bg-black opacity-70 "/> */}
			<div className="fixed top-0 right-0  w-[80%] md:max-w-[450px] bg-white h-full p-4">
				<p className="text-xl">Carrinho</p>
				<p>total:{cart.total}</p>
                <div className="flex pr-4 flex-col gap-4 overflow-auto h-[70vh]">
                    {items.map(([_key,item]) => <CartItemCard key={item.data.id} item={item} /> )}
                </div>
			</div>
			<main>{children}</main>
		</div>
	);
};
