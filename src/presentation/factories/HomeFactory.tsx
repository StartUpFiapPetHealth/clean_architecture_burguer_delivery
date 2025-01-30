import { makeLoadBurgers } from "../../main/factories/usecases/loadBurgersFactory"
import { Home } from "../pages/Home"



const HomeFactory = () => {
    const loadBurgers = makeLoadBurgers()
    return <Home loadBurgers={loadBurgers}/>
}

export { HomeFactory }