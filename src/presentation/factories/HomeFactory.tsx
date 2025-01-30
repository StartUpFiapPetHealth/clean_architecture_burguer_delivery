import { makeLoadBurgers } from "../../main/factories/usecases/loadBurgersFactory"
import { makeLoadAppetizers } from "../../main/factories/usecases/loadAppetizersFactory"
import { Home } from "../pages/Home"



const HomeFactory = () => {
    const loadBurgers = makeLoadBurgers()
    const loadAppetizers = makeLoadAppetizers()
    return <Home loadBurgers={loadBurgers} loadAppetizers={loadAppetizers}/>
}

export { HomeFactory }