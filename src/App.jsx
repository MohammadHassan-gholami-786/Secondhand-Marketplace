import React, { useState } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Items from './pages/Items'
import Sell from './pages/Sell'
import Customer from './pages/Customer'
import Rules from './pages/Rules'
import About from './pages/About'

function App() {
  const [items, setItems] = useState([
    { id: 1, name: 'Bicycle', price: 4500, seller: 'Ahmad', icon: '🚲', description: 'Used bicycle in good condition.' },
    { id: 2, name: 'Mobile Phone', price: 8500, seller: 'Ali', icon: '📱', description: 'Used phone in good condition.' },
    { id: 3, name: 'Laptop', price: 12000, seller: 'Reza', icon: '💻', description: 'Used laptop for study and work.' },
    { id: 4, name: 'Chair', price: 3000, seller: 'Hussain', icon: '🪑', description: 'Used chair in good condition.' },
    { id: 5, name: 'Television', price: 7000, seller: 'Karim', icon: '📺', description: 'Used television with a good picture.' },
    { id: 6, name: 'Guitar', price: 5000, seller: 'Mahdi', icon: '🎸', description: 'Used guitar for practice.' },
    { id: 7, name: 'Camera', price: 9000, seller: 'Saeed', icon: '📷', description: 'Used camera in good condition.' },
    { id: 8, name: 'Books', price: 500, seller: 'Sami', icon: '📚', description: 'Used books collection.' },
    { id: 9, name: 'Shoes', price: 1200, seller: 'Nader', icon: '👟', description: 'Used shoes in good condition.' },
    { id: 10, name: 'Backpack', price: 800, seller: 'Farid', icon: '🎒', description: 'Clean used backpack.' },
    { id: 11, name: 'Watch', price: 1500, seller: 'Omid', icon: '⌚', description: 'Used watch in good condition.' },
    { id: 12, name: 'Bicycle Helmet', price: 700, seller: 'Wali', icon: '⛑️', description: 'Used bicycle helmet.' },
    { id: 13, name: 'Headphones', price: 1100, seller: 'Hamid', icon: '🎧', description: 'Used headphones.' },
    { id: 14, name: 'Keyboard', price: 900, seller: 'Nasir', icon: '⌨️', description: 'Used computer keyboard.' },
    { id: 15, name: 'Mouse', price: 450, seller: 'Latif', icon: '🖱️', description: 'Used computer mouse.' },
    { id: 16, name: 'Football', price: 600, seller: 'Jamal', icon: '⚽', description: 'Used football.' },
    { id: 17, name: 'Table', price: 3500, seller: 'Basir', icon: '🪵', description: 'Used table in good condition.' },
    { id: 18, name: 'Printer', price: 4000, seller: 'Faisal', icon: '🖨️', description: 'Used printer for home or school.' },
    { id: 19, name: 'Fan', price: 1800, seller: 'Zubair', icon: '🌀', description: 'Used electric fan.' },
    { id: 20, name: 'Camera Bag', price: 1000, seller: 'Yasir', icon: '👜', description: 'Used camera bag.' }
  ])
  const [basket, setBasket] = useState([])
  const [customer, setCustomer] = useState(null)

  function addItem(item) {
    setBasket((items) => [...items, { ...item, quantity: 1 }])
  }

  function removeItem(id) {
    setItems((items) => items.filter((item) => item.id !== id))
  }

  function discountItem(id) {
    setItems((items) => items.map((item) =>
      item.id === id ? { ...item, price: Math.round(item.price * 0.95) } : item
    ))
  }

  function removeFromBasket(id) {
    setBasket((items) => items.filter((item) => item.id !== id))
  }

  function finalBuy() {
    setBasket([])
  }

  return (
    <div>
      <header className="header">
        <h1>Secondhand Marketplace</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/items">Products</Link>
          <Link to="/sell">Sell an Item</Link>
          <Link to="/customer">Customer Form</Link>
          <Link to="/rules">Rules</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home items={items} />} />
          <Route path="/items" element={<Items items={items} basket={basket} onAdd={addItem} onRemove={removeItem} onDiscount={discountItem} onBasketRemove={removeFromBasket} onFinalBuy={finalBuy} />} />
          <Route path="/sell" element={<Sell onAdd={(item) => setItems((items) => [...items, item])} />} />
          <Route path="/customer" element={<Customer customer={customer} onSave={setCustomer} />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <footer className="footer">Secondhand Marketplace - Buy and sell used items</footer>
    </div>
  )
}

export default App
