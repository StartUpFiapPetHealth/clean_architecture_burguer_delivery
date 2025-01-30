import type React from "react";
import type { Dessert } from "../../../../../domain/model/dessert";
import { DessertCard } from "../../../../components/DessertCard";

interface IDessertListProps {
	desserts: Dessert[];
	error: string;
}

export const DessertList: React.FC<IDessertListProps> = ({ desserts, error }) => {
	if (error) return <p className="text-center text-red-500 text-lg">{error}</p>;
	return (
        <>
            <p className="mt-10 text-center">Desserts</p>
            <div className="mt-10 px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
                    {desserts.map((dessert) => (
                        <DessertCard key={dessert.id} dessert={dessert} />
                    ))}
                </div>
            </div>
        </>
	);
};
