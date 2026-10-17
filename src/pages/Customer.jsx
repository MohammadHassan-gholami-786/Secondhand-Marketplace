import React, { useState } from 'react'

function Customer({ customer, onSave }) {
  const [name, setName] = useState('')
  const [fatherName, setFatherName] = useState('')
  const [age, setAge] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState({})

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = {}
    const validEmail = /\S+@\S+\.\S+/.test(email)

    if (name.trim().length < 3) nextErrors.name = 'Your name is not available.'
    if (fatherName.trim().length < 5) nextErrors.fatherName = "Your father's name is not available."
    if (Number(age) <= 18) nextErrors.age = 'Your age must be more than 18.'
    if (phone.trim().length < 5) nextErrors.phone = 'Your phone number is not available.'
    if (!validEmail) nextErrors.email = 'Your email is not available.'

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    onSave({ name, fatherName, age, phone, email })
    setErrors({})
  }

  return (
    <div className="form-page">
      <h2>Customer Information</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input value={name} onChange={(event) => setName(event.target.value)} />
        {errors.name && <p className="error">{errors.name}</p>}

        <label>Father's Name</label>
        <input value={fatherName} onChange={(event) => setFatherName(event.target.value)} />
        {errors.fatherName && <p className="error">{errors.fatherName}</p>}

        <label>Age</label>
        <input type="number" value={age} onChange={(event) => setAge(event.target.value)} />
        {errors.age && <p className="error">{errors.age}</p>}

        <label>Phone Number</label>
        <input value={phone} onChange={(event) => setPhone(event.target.value)} />
        {errors.phone && <p className="error">{errors.phone}</p>}

        <label>Email</label>
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        {errors.email && <p className="error">{errors.email}</p>}

        <button type="submit">Submit</button>
      </form>

      {customer && (
        <div className="customer-result">
          <h3>Customer Information</h3>
          <p>Name: {customer.name}</p>
          <p>Father's Name: {customer.fatherName}</p>
          <p>Age: {customer.age}</p>
          <p>Phone Number: {customer.phone}</p>
          <p>Email: {customer.email}</p>
          <p className="success">Information was submitted successfully.</p>
        </div>
      )}
    </div>
  )
}
export default Customer
