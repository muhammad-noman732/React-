import React from 'react';
import './expenseList.css';

function ExpenseList({ data, deleteExpense }) {
  return (
    <div className={`expense-item ${data.Type}`}>
      <div className="item-info">
        <span className='expense-text'>{data.text}</span>
        
      </div>
      <div className="item-amount">
        <span className={data.Type === 'expense' ? 'negative' : 'positive'}>
          {data.Type === 'expense' ? '-' : '+'}${data.amount.toFixed(2)}
        </span>
        <button 
          className='delete-btn' 
          onClick={() => deleteExpense(data.id)}
        >
          X
        </button>
      </div>
    </div>
  );
}

export default ExpenseList;