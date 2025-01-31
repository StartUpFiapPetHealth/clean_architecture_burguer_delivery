import type React from "react";
import type { Burger } from "../../../domain/model/burger";
import { useCartContext } from "../../context/cart";

interface IBurgerCardProps {
	burger: Burger;
}

const BurgerCard: React.FC<IBurgerCardProps> = ({ burger }) => {
    const { addItemToCart } = useCartContext()
	
	return (
		<div
			key={burger.id}
			className="bg-white rounded-lg shadow-md overflow-hidden"
		>
			<img
				src={burger.image[0]}
				alt={burger.title}
				className="w-full h-48 object-cover"
			/>

			<div className="p-4">
				<h3 className="text-lg font-semibold text-gray-800">{burger.title}</h3>
				<p className="text-gray-600 text-sm mt-2">{burger.description}</p>
				<div className="flex flex-col justify-between mt-4 mb-4">
					<span className="text-gray-800 font-semibold">
						Lanche: R$ {burger.values.single},00
					</span>
					<span className="text-gray-800 font-semibold">
						Combo: R$ {burger.values.combo},00 <span className="text-xs font-medium">(Fritas + Refrigerante)</span>
					</span>
				</div>
                <button onClick={() => addItemToCart({data: burger, value: burger.values.combo, quantity: 1,  type: 'combo'})} type="button" className="w-full  text-white bg-green-700 hover:bg-green-800  focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  transition-colors">Adicionar Combo ao carrinho</button>
                <button onClick={() => addItemToCart({ data: burger, value: burger.values.single, quantity: 1, type: 'single'})} type="button" className="w-full text-gray-900  border border-gray-800 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600   dark:focus:ring-gray-800 transition-colors">Adicionar lanche ao carrinho</button>			</div>
		</div>
	);
};

export { BurgerCard };
