import React, { useEffect, useState } from 'react';
import banner from '../../../assets/banner.png';
import { Burger } from '../../../domain/usecases/loadBurgers';
import { makeLoadBurgers } from '../../../main/factories/usecases/loadBurgersFactory';


export const Home = () => {
    const [burgers, setBurgers] = useState<Burger[]>([]);
    const [error, setError] = useState('');
  
    useEffect(() => {
      const loadBurgers = makeLoadBurgers();
  
      const fetchBurgers = async () => {
        try {
          const burgersList = await loadBurgers.loadAll();
          setBurgers(burgersList);
        } catch {
          setError('Erro ao carregar os produtos. Tente novamente mais tarde.');
        }
      };
  
      fetchBurgers();
    }, []);
    
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

            <div className="mt-10 px-4">
                {
                    error ?
                    (
                        <p className="text-center text-red-500 text-lg">{error}</p>
                    )
                    :
                    (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
                            {
                                burgers.map((burger) => (
                                    <div key={burger.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
                                        <img
                                            src={burger.image[0]}
                                            alt={burger.title}
                                            className="w-full h-48 object-cover"
                                        />

                                        <div className="p-4">
                                            <h3 className="text-lg font-semibold text-gray-800">{burger.title}</h3>
                                            <p className="text-gray-600 text-sm mt-2">{burger.description}</p>
                                            <div className="flex justify-between mt-4">
                                                <span className="text-green-500 font-semibold">
                                                Single: R$ {burger.values.single}
                                                </span>
                                                <span className="text-green-500 font-semibold">
                                                Combo: R$ {burger.values.combo}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    )
                }
            </div>
        </div>
    )
}