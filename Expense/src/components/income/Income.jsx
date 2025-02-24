import React from 'react';

function Income(props) {
  return (
    <div className='income-expense-container'>
      <div className='income'>
        <p>Income</p>
        <p>${props.income}</p>
      </div>
      <div className='expense'>
        <p>Expenses</p>
        <p>${props.expenses}</p>
      </div>
    </div>
  );
}

export default Income;
