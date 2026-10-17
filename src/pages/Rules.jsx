import React from 'react'

function Rules() {
  const rules = [
    'The seller must describe the item honestly.',
    'The price must be clear and fair.',
    'The seller must answer buyer questions respectfully.',
    'Delivery or pickup details must be clear before the deal.',
    'Illegal, dangerous, or prohibited items are not allowed.',
    'Do not publish another person\'s private information without permission.',
    'Insults, harassment, and disrespectful behavior are not allowed.',
    'Local laws and marketplace rules must be followed.',
    'The seller must keep the promises made in the transaction.',
    'Try to solve disagreements through respectful communication first.'
  ]
  return (
    <div>
      <h2>Marketplace Rules</h2>
      <ol className="rules">
        {rules.map((rule, index) => <li key={index}>{rule}</li>)}
      </ol>
      <div className="card fee-rule">
        <h3>Marketplace Fee</h3>
        <p>5% is taken from the seller and 5% is added to the buyer price. The website receives 10% in total from each completed transaction.</p>
      </div>
    </div>
  )
}
export default Rules
