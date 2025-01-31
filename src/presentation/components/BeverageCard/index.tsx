import type React from "react";
import type { Beverage } from "../../../domain/model/beverage";
import { useCartContext } from "../../context/cart";

interface IBeverageCardProps {
	beverage: Beverage;
}

const BeverageCard: React.FC<IBeverageCardProps> = ({ beverage }) => {
	const { addItemToCart } = useCartContext()

	return (
		<div    
			key={beverage.id}
			className="bg-white rounded-lg shadow-md overflow-hidden"
		>
			<img
				src={beverage.image}
				alt={beverage.title}
				className="w-full h-48 object-cover"
			/>

			<div className="p-4">
				<h3 className="text-lg font-semibold text-gray-800">{beverage.title}</h3>
				<p className="text-gray-600 text-sm mt-2">{beverage.description}</p>
				<div className="flex flex-col justify-between mt-4 mb-4">
					<span className="text-gray-800 font-semibold">
						R$ {beverage.value},00
					</span>
				</div>
                	<button onClick={() => addItemToCart({data: beverage, value: beverage.value, quantity: 1})} type="button" className="w-full  text-white bg-green-700 hover:bg-green-800  focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  transition-colors">Adicionar ao carrinho</button>
				</div>
		</div>
	);
};

export { BeverageCard };
