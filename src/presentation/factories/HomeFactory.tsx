import { makeLoadBurgers } from "../../main/factories/usecases/loadBurgersFactory"
import { makeLoadAppetizers } from "../../main/factories/usecases/loadAppetizersFactory"
import { makeLoadBeverages } from "../../main/factories/usecases/loadBeveragesFactory"
import { Home } from "../pages/Home"

const HomeFactory = () => {
    const loadBurgers = makeLoadBurgers()
    const loadAppetizers = makeLoadAppetizers()
    const loadBeverages = makeLoadBeverages()
    return <Home loadBurgers={loadBurgers} loadAppetizers={loadAppetizers} loadBeverages={loadBeverages}/>
}

export { HomeFactory }