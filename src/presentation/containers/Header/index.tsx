import {ShoppingCart} from 'lucide-react'
import { useCartContext } from '../../context/cart'


interface IHeaderProps {
    onClickCart: () => void
}
export const Header:React.FC<IHeaderProps> = ({onClickCart}) => {
    const {items} = useCartContext()
    const size = items.length
    return(
        <header className="fixed top-0 bg-black-primary h-12 w-full pr-10 flex justify-end">
            <button onClick={onClickCart} type="button" className='flex gap-2 justify-center items-center'><span className='text-white'>({size}) Carrinho</span> <ShoppingCart size={24} color='white'/></button>
        </header>
    )
}