import { Beverage } from "../model/beverage";

export interface LoadBeverages{
    loadBeverages() : Promise<Beverage[]>
}