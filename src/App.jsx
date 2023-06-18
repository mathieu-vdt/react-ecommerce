import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Connect from './pages/connect'
import CartList from './pages/cart'
import Dashboard from './pages/dashboard'
import SignUp from './pages/signUp'
import Navbar from './components/navbar'
import Error404 from './pages/error404'
import MyAccount from './pages/my-account'
import Entete from './layout/entete'
import DashboardProducts from './layout/dashboard/products'
import Footer from './layout/footer'
import ProductDetail from './pages/detail';
import OrderList from './pages/order';
import DashboardOrders from './layout/dashboard/orders'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* <Entete /> */}
        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="order/" element={<OrderList />} />
          <Route path="/connexion" element={<Connect />} ></Route>
          <Route path="/inscription" element={<SignUp />} ></Route>
          <Route path="/cart" element={<CartList />} ></Route>
          <Route path='/my-account' element={<MyAccount />}></Route>
          <Route path="/dashboard" element={<Dashboard />} ></Route>
          <Route path="/dashboard/products" element={<DashboardProducts />} ></Route>
          <Route path="/dashboard/orders" element={<DashboardOrders />} ></Route>
          <Route path="*" element={<Error404 />} ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
