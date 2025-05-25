import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Product_List from "./pages/Product_List"
import Product_Details from "./pages/Product_Details"
import Cart from "./pages/Cart"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product_list" element={<Product_List />}></Route>
          <Route
            path="/product_details/:id"
            element={<Product_Details />}
          ></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
