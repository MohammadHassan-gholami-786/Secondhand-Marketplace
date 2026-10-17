import React, { useState } from 'react'

function Sell({ onAdd }) {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [seller, setSeller] = useState('')
  const [icon, setIcon] = useState('📦')
  const [description, setDescription] = useState('')
  const [errors, setErrors] = useState({})
  const [saved, setSaved] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = {}

    if (name.trim().length < 3) nextErrors.name = 'Product name is not available.'
    if (seller.trim().length < 3) nextErrors.seller = 'Seller name is not available.'
    if (price === '' || Number(price) <= 0) nextErrors.price = 'Price is not available.'
    if (description.trim() === '') nextErrors.description = 'Description is required.'

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    onAdd({ id: Date.now(), name, price: Number(price), seller, icon, description })
    setName('')
    setPrice('')
    setSeller('')
    setDescription('')
    setErrors({})
    setSaved(true)
  }

  return (
    <div className="form-page">
      <h2>List an Item for Sale</h2>
      <form onSubmit={handleSubmit}>
        <label>Product Name</label>
        <input value={name} onChange={(event) => setName(event.target.value)} />
        {errors.name && <p className="error">{errors.name}</p>}

        <label>Price</label>
        <input type="number" value={price} onChange={(event) => setPrice(event.target.value)} />
        {errors.price && <p className="error">{errors.price}</p>}

        <label>Seller Name</label>
        <input value={seller} onChange={(event) => setSeller(event.target.value)} />
        {errors.seller && <p className="error">{errors.seller}</p>}

        <label>Product Emoji</label>
        <input value={icon} onChange={(event) => setIcon(event.target.value)} />

        <label>Description</label>
        <textarea value={description} onChange={(event) => setDescription(event.target.value)} />
        {errors.description && <p className="error">{errors.description}</p>}

        {saved && <p className="success">Product was listed successfully.</p>}
        <button type="submit">List Product</button>
      </form>
    </div>
  )
}
export default Sell
