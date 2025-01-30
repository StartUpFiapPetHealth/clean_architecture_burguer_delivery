import { BrowserRouter } from "react-router-dom"
import { Router } from "./router/index.routes"
import './globals.css'
import { CartContextProvider } from "./context/cart"

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Router />
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App
