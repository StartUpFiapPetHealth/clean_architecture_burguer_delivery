import type React from "react";
import type { Beverage } from "../../../../../domain/model/beverage";
import { BeverageCard } from "../../../../components/BeverageCard";

interface IBeverageListProps {
	beverages: Beverage[];
	error: string;
}

export const BeverageList: React.FC<IBeverageListProps> = ({ beverages, error }) => {
	if (error) return <p className="text-center text-red-500 text-lg">{error}</p>;
	return (
        <>
            <p className="mt-10 text-center">Beverages</p>
            <div className="mt-10 px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
                    {beverages.map((beverage) => (
                        <BeverageCard key={beverage.id} beverage={beverage} />
                    ))}
                </div>
            </div>
        </>
	);
};
