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
import Brands from "./pages/Brands"
import Category from "./pages/Category"
import UpdateProduct from "./pages/UpdateProduct"
import Profile from "./pages/Profile"
import NotFound from "./pages/NotFound"
import Login from "./pages/Login"
import PrivateRoute from "./components/PrivateRoute/PrivateRoute"
import useAuthCheck from "./hooks/useAuthCheck"
import Test from "./pages/Test"

function App() {

  const id = useId()
  console.log({ id });

  const isChecked = useAuthCheck()
  console.log({ isChecked });
  return (
    <>
      {
        !isChecked ? <h1>Loading...</h1> :

          <BrowserRouter>


            <Routes>

              <Route path="/" element={
                <PrivateRoute>   <Layout>
                  <Dashboard />
                </Layout></PrivateRoute>
              } />

              <Route path="/users" element={<PrivateRoute><Layout> <Users />   </Layout> </PrivateRoute>} />
              <Route path="/orders" element={<PrivateRoute><Layout> <Orders />   </Layout> </PrivateRoute>} />

              <Route path="/products" element={<PrivateRoute>
                <Layout><Products />    </Layout>
              </PrivateRoute>} />
              <Route path="/addProduct" element={<PrivateRoute><Layout><AddProduct /></Layout></PrivateRoute>} />
              <Route path="/:productId" element={<PrivateRoute><Layout><UpdateProduct /> </Layout></PrivateRoute>} />


              <Route path="/category" element={<PrivateRoute><Layout><Category /></Layout></PrivateRoute>} />
              <Route path="/addCategory" element={<PrivateRoute><Layout><AddCategory /></Layout></PrivateRoute>} />

              <Route path="/brands" element={<PrivateRoute><Layout><Brands /></Layout></PrivateRoute>} />
              <Route path="/addBrand" element={<PrivateRoute>
                <Layout><AddBrand /></Layout>
              </PrivateRoute>} />


              <Route path="/profile" element={<PrivateRoute><Layout><Profile /> </ Layout></PrivateRoute>} />
              <Route path="/setting" element={<PrivateRoute><Layout><Profile /> </Layout></PrivateRoute>} />


              <Route path="/login" element={<Login />} />
              <Route path="/test" element={<Test />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
      }
    </>
  )
}

export default App
