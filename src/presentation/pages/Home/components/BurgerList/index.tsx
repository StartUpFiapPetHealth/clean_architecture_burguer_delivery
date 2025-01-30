import type React from "react";
import type { Burger } from "../../../../../domain/model/burger";
import { BurgerCard } from "../../../../components/BurgerCard";

interface IBurgerListProps {
	burgers: Burger[];
	error: string;
}

export const BurgerList: React.FC<IBurgerListProps> = ({ burgers, error }) => {
	if (error) return <p className="text-center text-red-500 text-lg">{error}</p>;
	return (
        <>
            <p className="mt-10 text-center">Burguers</p>
            <div className="mt-10 px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
                    {burgers.map((burger) => (
                        <BurgerCard key={burger.id} burger={burger} />
                    ))}
                </div>
            </div>
        </>
	);
};
