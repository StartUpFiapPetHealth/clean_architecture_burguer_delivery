import { useCartContext } from "../../context/cart";
import { CartItemCard } from "../../components/CartItemCard";
import { useNavigate } from "react-router-dom";
import { showCurrency } from "../../../utils/showCurrency";

interface ISidebarProps {
    onClose: (value:boolean) => void
}
export const Sidebar:React.FC<ISidebarProps> = ({ onClose}) => {
	const { cart, handleResetCart } = useCartContext();
    const navigate = useNavigate()
	return (
		<>
			<button
				type="button"
				onClick={() => onClose(false)}
				className="fixed top-0 left-0 right-0 h-full w-full bg-black opacity-70 "
			/>
			<div className="fixed top-0 right-0  w-[80%] md:max-w-[450px] bg-white h-full p-4">
				<p className="text-xl mb-4">Carrinho</p>
				<div className="flex pr-4 flex-col gap-4 overflow-auto h-[70vh]">
					{cart.items.map((item) => (
						<CartItemCard key={item.data.id} item={item} />
					))}
				</div>
                <div className="flex justify-between">
                    <p className="text-2xl font-semibold">Total:{showCurrency(cart.total)}</p>
                <button className="text-blue-500" onClick={() => handleResetCart()} type="button">Limpar carrinho</button>

                </div>
				<div className="flex flex-col mt-4 gap-2">
					<button
                        onClick={() => navigate('/checkout')}
						type="button"
						className="rounded-sm w-full bg-black text-white p-4"
					>
						Finalizar pedido
					</button>
					<button
						type="button"
                        onClick={() => onClose(false)}
						className="rounded-sm w-full bg-white text-black p-4 border-1"
					>
						Cancelar
					</button>

				</div>
			</div>
		</>
	);
};
