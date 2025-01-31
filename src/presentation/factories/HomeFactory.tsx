import { makeLoadBurgers } from "../../main/factories/usecases/loadBurgersFactory";
import { makeLoadAppetizers } from "../../main/factories/usecases/loadAppetizersFactory";
import { makeLoadBeverages } from "../../main/factories/usecases/loadBeveragesFactory";
import { Home } from "../pages/Home";
import { makeLoadDesserts } from "../../main/factories/usecases/loadDessertsFactory";

const HomeFactory = () => {
	const loadBurgers = makeLoadBurgers();
	const loadAppetizers = makeLoadAppetizers();
	const loadBeverages = makeLoadBeverages();
	const loadDesserts = makeLoadDesserts();

	return (
		<Home
			loadBurgers={loadBurgers}
			loadAppetizers={loadAppetizers}
			loadBeverages={loadBeverages}
			loadDesserts={loadDesserts}
		/>
	);
};

export { HomeFactory };
