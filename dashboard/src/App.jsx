import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Layout from "./components/Layout/Layout"
import { useId } from "react"
import Users from "./pages/Users"
import Orders from "./pages/Orders"
import Products from "./pages/Products"
import AddProduct from "./pages/AddProduct"
import AddCategory from "./pages/AddCategory"
import AddBrand from "./pages/AddBrand"

function App() {

  const id = useId()
  console.log({ id });
  return (
    <>
      <BrowserRouter>

        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/products" element={<Products />} />
            <Route path="/addProduct" element={<AddProduct />} />
            <Route path="/addCategory" element={<AddCategory />} />
            <Route path="/addBrand" element={<AddBrand />} />

          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
