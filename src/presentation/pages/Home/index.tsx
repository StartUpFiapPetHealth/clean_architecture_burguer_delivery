import banner from '../../../assets/banner.png'

export const Home = () => {
    return (
        <div >
            <div className='w-full bg-black-primary'>
                <div className="w-full p-10  max-w-[1200px] mx-auto">
                    <h1 className="text-white text-4xl font-semibold mb-10 text-center md:text-left">Delivery Burguer</h1>
                    <div className='grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-4 '>
                        <div className="flex flex-col justify-center gap-1 order-2 md:order-1">
                            <h2 className="text-white text-4xl font-semibold text-center md:text-left"><span className="text-yellow-primary">Especial </span> a todo <br /> momento pra você</h2>
                            <p className="text-white mt-2 text-xl text-center md:text-left">
                                Os melhores com a melhor entrega ao seu serviço
                                Entregamos em até 50min.
                            </p>
                        </div>
                        <div className='w-full flex justify-center max-h-[600px] order-1 md:order-2'>
                            <img src={banner} alt="lanches banner" />
                        </div>
                    </div>
                </div>
            </div>
            <h3 className="text-center mt-10 font-semibold text-xl">Seu lanche na hora certa</h3>
            <p className="text-center mt-4 ">Procurando uma refeição rápida e deliciosa? <br /> Você vai se surpreender com nossos snacks.</p>
            <p className="mt-10 text-center">SNACKS</p>
        </div>
    )
}