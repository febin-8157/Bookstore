import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'
import Cart from './pages/Cart'
import Header from './components/Header'
import Login from './components/Login'
import Register from './components/Register'
import CheckOutPage from './pages/CheckOutPage'
import SingleBook from './components/books/SingleBook'
import {AuthProvide} from './context/AuthContext'
import PrivateRouter from './router/PrivateRouter'
import Orders from './pages/Orders'
function App({isAuthorised}) {

  return (
    <>
   <AuthProvide>
      <Header/>
       <Routes>
      
      <Route path='/' element={<HomePage/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/orders' element={<PrivateRouter><Orders/></PrivateRouter>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/checkout' element={<PrivateRouter><CheckOutPage/></PrivateRouter>}/>
      <Route path='/books/:id' element={<SingleBook/>}/>
     </Routes>
     {<Footer/>}
   </AuthProvide>
    </>
  )
}

export default App
