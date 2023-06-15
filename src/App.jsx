import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Connect from './pages/connect'
import Navbar from './components/navbar'
import Error404 from './pages/error404'
import Entete from './layout/entete'

import Footer from './layout/footer'
import ProductDetail from './pages/detail';
import OrderList from './pages/order';

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
          <Route path="*" element={<Error404 />} ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
