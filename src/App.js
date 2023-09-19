
// React Redux useSelector is a custom hook introduced in React Redux v7.1.0.
// Combined with other custom hooks such as useDispatch,
// it enables developers to manage state in Redux while
// writing fast, performant, and easy-to-read code in as few lines as possible.

import React from 'react'
import CartContainer from './components/CartContainer'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default App
