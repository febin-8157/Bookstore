import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'
import Cart from './pages/Cart'
import Header from './components/Header'
import Wishlist from './pages/Whishlist'

function App() {

  return (
    <>
    <Header/>
     <Routes>
    
    <Route path='/' element={<HomePage/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/wishlist' element={<Wishlist/>}/>
    {/* : indicate which is path parameter of url ,path parameter will be stored in variable id*/}
    {/* <Route path='/:id/view' element={<View/>}/>
    <Route path='/*' element={<PnF/>}/> */}
   </Routes>
   <Footer/>
    </>
  )
}

export default App
