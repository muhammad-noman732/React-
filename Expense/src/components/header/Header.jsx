import React from 'react'

function Header({balance}) {
  return (
    <div>
      <h2 className='heading'>Expense Tracker</h2>
      <p className='balance'>Your Balance</p>
      <h2 className='balance'>${balance}</h2>
    </div>
  )
}

export default Header
