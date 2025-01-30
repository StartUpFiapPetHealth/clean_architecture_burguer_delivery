import { useState } from "react";
import { useCartContext } from "../../context/cart";
import { CartItemCard } from "../../components/CartItemCard";

interface ISidebarProps {
    open: boolean,
    onClose: (value:boolean) => void
}
export const Sidebar:React.FC<ISidebarProps> = ({open, onClose}) => {
	const { cart } = useCartContext();
	const items = Array.from(cart.items.entries());
	return (
		<>
			<button
				type="button"
				onClick={() => onClose(false)}
				className="fixed top-0 left-0 right-0 h-full w-full bg-black opacity-70 "
			/>
			<div className="fixed top-0 right-0  w-[80%] md:max-w-[450px] bg-white h-full p-4">
				<p className="text-xl">Carrinho</p>
				<p>total:{cart.total}</p>
				<div className="flex pr-4 flex-col gap-4 overflow-auto h-[70vh]">
					{items.map(([_key, item]) => (
						<CartItemCard key={item.data.id} item={item} />
					))}
				</div>
				<div className="flex flex-col mt-4 gap-2">
					<button
						type="button"
						className="rounded-sm w-full bg-black text-white p-4"
					>
						Finalizar pedido
					</button>
					<button
						type="button"
						className="rounded-sm w-full bg-white text-black p-4 border-1"
					>
						Cancelar
					</button>
				</div>
			</div>
		</>
	);
};
