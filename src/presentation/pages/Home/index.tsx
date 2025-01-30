import { useCallback, useEffect, useState } from "react";
import banner from "../../../assets/banner.png";
import { BurgerList } from "./components/BurgerList";
import type { Burger } from "../../../domain/model/burger";
import type { LoadBurgers } from "../../../domain/usecases/loadBurgers";
import type { LoadAppetizers } from "../../../domain/usecases/loadAppetizers";
import { UnexpectedError } from "../../../domain/errors/unexpectedError";
import { AppError } from "../../../domain/errors/appError";
import type { Appetizer } from "../../../domain/model/appetizer";
import { AppetizerList } from "./components/AppetizersList";
import type { Beverage } from "../../../domain/model/beverage";
import { BeverageList } from "./components/BeveragesList";
import type { LoadBeverages } from "../../../domain/usecases/loadBeverages";
import type { LoadDesserts } from "../../../domain/usecases/loadDesserts";
import { DessertList } from "./components/DessertsList";
import type { Dessert } from "../../../domain/model/dessert";
import { Layout } from "../../Layout";

interface IHomeProps {
	loadBurgers: LoadBurgers;
	loadAppetizers: LoadAppetizers;
	loadBeverages: LoadBeverages;
	loadDesserts: LoadDesserts;
}

export const Home: React.FC<IHomeProps> = ({ loadBurgers, loadAppetizers, loadBeverages, loadDesserts }) => {
	const [burgers, setBurgers] = useState<Burger[]>([]);
	const [appetizers, setAppetizers] = useState<Appetizer[]>([]);
	const [beverages, setBeverages] = useState<Beverage[]>([]);
	const [desserts, setDesserts] = useState<Dessert[]>([]);

	const [error, setError] = useState("");

	const fetchBurgers = useCallback(async () => {
		try {
			const burgersList = await loadBurgers.loadAll();
			setBurgers(burgersList);
		} catch (error) {
			if (error instanceof AppError) {
				setError(error.message);
				return;
			}

			setError(new UnexpectedError().message);
		}
	}, [loadBurgers]);

	const fetchAppetizers = useCallback(async () => {
        try {
            const appetizersList = await loadAppetizers.loadAppetizers();
            setAppetizers(appetizersList);
        } catch (error) {
            if(error instanceof AppError) {
                setError(error.message)
                return;
            }

            setError(new UnexpectedError().message)

        }
    },[loadAppetizers])

	const fetchBeverages = useCallback(async () => {
        try {
            const beveragesList = await loadBeverages.loadBeverages();
            setBeverages(beveragesList);
        } catch (error) {
            if(error instanceof AppError) {
                setError(error.message)
                return;
            }

            setError(new UnexpectedError().message)

        }
    },[loadBeverages])

	const fetchDesserts = useCallback(async () => {
        try {
            const dessertsList = await loadDesserts.loadDesserts();
            setDesserts(dessertsList);
        } catch (error) {
            if(error instanceof AppError) {
                setError(error.message)
                return;
            }

            setError(new UnexpectedError().message)

        }
    },[loadDesserts])

	useEffect(() => {
		fetchBurgers();
	}, [fetchBurgers]);

	useEffect(() => {
		fetchAppetizers();
	}, [fetchAppetizers]);

	useEffect(() => {
		fetchBeverages();
	}, [fetchBeverages]);

	useEffect(() => {
		fetchDesserts();
	}, [fetchDesserts]);

	return (
		<Layout>
			<div className="w-full bg-black-primary">
				<div className="w-full p-10  max-w-[1200px] mx-auto">
					<h1 className="text-white text-4xl font-semibold mb-10 text-center md:text-left">
						Delivery Burguer
					</h1>
					<div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-4 ">
						<div className="flex flex-col justify-center gap-1 order-2 md:order-1">
							<h2 className="text-white text-4xl font-semibold text-center md:text-left">
								<span className="text-yellow-primary">Especial </span> a todo{" "}
								<br /> momento pra você
							</h2>
							<p className="text-white mt-2 text-xl text-center md:text-left">
								Os melhores com a melhor entrega ao seu serviço Entregamos em
								até 50min.
							</p>
						</div>
						<div className="w-full flex justify-center max-h-[600px] order-1 md:order-2">
							<img src={banner} alt="lanches banner" />
						</div>
					</div>
				</div>
			</div>
			<h3 className="text-center mt-10 font-semibold text-xl">
				Seu lanche na hora certa
			</h3>
			<p className="text-center mt-4 ">
				Procurando uma refeição rápida e deliciosa? <br /> Você vai se
				surpreender com nossos snacks.
			</p>
			<BurgerList  burgers={burgers} error={error}/>
			<AppetizerList  appetizers={appetizers} error={error}/>
			<BeverageList  beverages={beverages} error={error}/>
			<DessertList  desserts={desserts} error={error}/>
		</Layout>
	)
};
