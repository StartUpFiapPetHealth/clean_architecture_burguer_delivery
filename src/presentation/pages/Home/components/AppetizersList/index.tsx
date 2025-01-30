import type React from "react";
import type { Appetizer } from "../../../../../domain/model/appetizer";
import { AppetizerCard } from "../../../../components/AppetizerCard";

interface IAppetizerListProps {
	appetizers: Appetizer[];
	error: string;
}

export const AppetizerList: React.FC<IAppetizerListProps> = ({ appetizers, error }) => {
	if (error) return <p className="text-center text-red-500 text-lg">{error}</p>;
	return (
        <>
            <p className="mt-10 text-center">Appetizers</p>
            <div className="mt-10 px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
                    {appetizers.map((appetizer) => (
                        <AppetizerCard key={appetizer.id} appetizer={appetizer} />
                    ))}
                </div>
            </div>
        </>
	);
};
