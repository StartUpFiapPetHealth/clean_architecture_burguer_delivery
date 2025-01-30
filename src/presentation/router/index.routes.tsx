import { Route, Routes } from 'react-router-dom'
import { HomeFactory } from '../factories/HomeFactory'


export function Router() {
    return (
        <Routes>
            <Route path="/" element={<HomeFactory/>} />
        </Routes>
    )
}