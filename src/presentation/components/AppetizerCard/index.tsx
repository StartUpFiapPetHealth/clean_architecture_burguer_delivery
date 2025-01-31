import type React from "react";
import type { Appetizer } from "../../../domain/model/appetizer";
import { useCartContext } from "../../context/cart";

interface IAppetizerCardProps {
	appetizer: Appetizer;
}

const AppetizerCard: React.FC<IAppetizerCardProps> = ({ appetizer }) => {
	const { addItemToCart } = useCartContext()

	return (
		<div
			key={appetizer.id}
			className="bg-white rounded-lg shadow-md overflow-hidden"
		>
			<img
				src={appetizer.image}
				alt={appetizer.title}
				className="w-full h-48 object-cover"
			/>

			<div className="p-4">
				<h3 className="text-lg font-semibold text-gray-800">{appetizer.title}</h3>
				<p className="text-gray-600 text-sm mt-2">{appetizer.description}</p>
				<div className="flex flex-col justify-between mt-4 mb-4">
					<span className="text-gray-800 font-semibold">
						Pequena: R$ {appetizer.values.small},00
					</span>
					<span className="text-gray-800 font-semibold">
						Grande: R$ {appetizer.values.large},00 <span className="text-xs font-medium">(Fritas + Refrigerante)</span>
					</span>
				</div>
					<button  onClick={() => addItemToCart({data: appetizer, value: appetizer.values.large ?? 0, quantity: 1, type: 'large'})} type="button" className="w-full  text-white bg-green-700 hover:bg-green-800  focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  transition-colors">Adicionar Grande ao carrinho</button>
					<button  onClick={() => addItemToCart({data: appetizer, value: appetizer.values.small ?? 0, quantity: 1, type: 'small'})} type="button" className="w-full text-gray-900  border border-gray-800 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600   dark:focus:ring-gray-800 transition-colors">Adicionar Pequeno ao carrinho</button>			
				</div>
		</div>
	);
};

export { AppetizerCard };
