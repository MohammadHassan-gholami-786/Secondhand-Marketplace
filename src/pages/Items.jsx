import React, { useState } from 'react'

function Items({ items, basket, onAdd, onRemove, onDiscount, onBasketRemove, onFinalBuy }) {
  const [saved, setSaved] = useState(false)
  const total = basket.reduce((sum, item) => sum + item.price * item.quantity, 0)

  function finalBuy() {
    if (basket.length === 0) return
    onFinalBuy()
    setSaved(true)
  }

  return (
    <div>
      <h2>Products for Sale</h2>
      <p>5% is taken from the seller and 5% is added to the buyer price.</p>
      <div className="grid">
        {items.map((item) => {
          const buyerPrice = Math.round(item.price * 1.05)
          return (
            <article className="card" key={item.id}>
              <div className="icon">{item.icon}</div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Seller: {item.seller}</p>
              <p>Seller price: {item.price} AFN</p>
              <p>Buyer price: {buyerPrice} AFN</p>
              <button onClick={() => onAdd(item)}>Add to Purchase</button>
              <button onClick={() => onDiscount(item.id)}>5% Discount</button>
              <button className="danger" onClick={() => onRemove(item.id)}>Delete Product</button>
            </article>
          )
        })}
      </div>

      <section className="purchase">
        <h2>Selected Products</h2>
        {basket.length === 0 ? (
          <p>Your selected products are empty.</p>
        ) : (
          <div>
            {basket.map((item) => (
              <div className="purchase-row" key={item.id}>
                <span>{item.icon} {item.name} - {Math.round(item.price * 1.05)} AFN</span>
                <button className="danger" onClick={() => onBasketRemove(item.id)}>Remove</button>
              </div>
            ))}
            <h3>Total: {Math.round(total * 1.05)} AFN</h3>
            <button onClick={finalBuy}>Final Buy</button>
            {saved && <p className="success">Purchase completed successfully.</p>}
          </div>
        )}
      </section>
    </div>
  )
}
export default Items
