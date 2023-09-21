
// React Redux useSelector is a custom hook introduced in React Redux v7.1.0.
// Combined with other custom hooks such as useDispatch,
// it enables developers to manage state in Redux while
// writing fast, performant, and easy-to-read code in as few lines as possible.

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartContainer from './components/CartContainer'
import Modal from './components/Modal'
import Navbar from './components/Navbar'
import {calculate} from './features/cart/cartSlice'

const App = () => {
  const {cartItems} = useSelector((state) => state.cart);
  
  const {isOpen} = useSelector((state) => state.modal)
  const dispatch = useDispatch();

    
  React.useEffect(() => {
    dispatch(calculate());
  }, [cartItems]);
  return (
    <main>
      {isOpen && <Modal /> }{console.log(isOpen)}
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default App
