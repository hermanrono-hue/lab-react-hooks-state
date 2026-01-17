import './App.css'
import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import styles from './styles/DarkMode.module.css'

const App = () => {
  
  const [darkMode, setDarkMode]=useState(false)

  const [cartItems, setCartItems]=useState([])

  const [category,setCategory]=useState('all')

  const addToCart=(product)=>{setCartItems([...cartItems, product])}

  return (
    <div className={darkMode? styles.dark:styles.light}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode}/>

      <label>Filter by Category: </label>
      <select value={category} onChange={(e)=>setCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList category={category} addToCart={addToCart}/>
      <Cart cartItems={cartItems}/>
    </div>
  )
}

export default App
