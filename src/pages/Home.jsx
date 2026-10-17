import React from 'react'
import { Link } from 'react-router-dom'

function Home({ items }) {
  return (
    <div>
      <section className="hero">
        <h2>Welcome to the Secondhand Marketplace</h2>
        <p>Find used items or list something you want to sell.</p>
        <Link className="button" to="/sell">Sell an Item</Link>
      </section>
      <h2>Some Available Products</h2>
      <div className="grid">
        {items.slice(0, 6).map((item) => (
          <article className="card" key={item.id}>
            <div className="icon">{item.icon}</div>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Seller price: {item.price} AFN</p>
          </article>
        ))}
      </div>
    </div>
  )
}
export default Home
