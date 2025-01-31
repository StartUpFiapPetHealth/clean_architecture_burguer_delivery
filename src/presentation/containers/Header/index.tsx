import {ShoppingCart} from 'lucide-react'


interface IHeaderProps {
    onClickCart: () => void
}
export const Header:React.FC<IHeaderProps> = ({onClickCart}) => {
    return(
        <header className="fixed top-0 bg-black-primary h-12 w-full pr-10 flex justify-end">
            <button onClick={onClickCart} type="button" className='flex gap-2 justify-center items-center'><span className='text-white'>(12)</span> <ShoppingCart size={24} color='white'/></button>
        </header>
    )
}