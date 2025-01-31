import { Route, Routes } from 'react-router-dom'
import { HomeFactory } from '../factories/HomeFactory'
import { CheckoutFactory } from '../factories/CheckoutFactory'


export function Router() {
    return (
        <Routes>
            <Route path="/" element={<HomeFactory/>} />
            <Route path="/checkout" element={<CheckoutFactory/>} />
        </Routes>
    )
}