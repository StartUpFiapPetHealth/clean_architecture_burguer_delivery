import type React from "react";
import type { Dessert } from "../../../domain/model/dessert";

interface IDessertCardProps {
	dessert: Dessert;
}

const DessertCard: React.FC<IDessertCardProps> = ({ dessert }) => {
	return (
		<div    
			key={dessert.id}
			className="bg-white rounded-lg shadow-md overflow-hidden"
		>
			<img
				src={dessert.image}
				alt={dessert.title}
				className="w-full h-48 object-cover"
			/>

			<div className="p-4">
				<h3 className="text-lg font-semibold text-gray-800">{dessert.title}</h3>
				<p className="text-gray-600 text-sm mt-2">{dessert.description}</p>
				<div className="flex flex-col justify-between mt-4 mb-4">
					<span className="text-gray-800 font-semibold">
						R$ {dessert.value},00
					</span>
				</div>
                <button type="button" className="w-full  text-white bg-green-700 hover:bg-green-800  focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  transition-colors">Adicionar Combo ao carrinho</button>
                <button type="button" className="w-full text-gray-900  border border-gray-800 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600   dark:focus:ring-gray-800 transition-colors">Adicionar lanche ao carrinho</button>			</div>
		</div>
	);
};

export { DessertCard };
