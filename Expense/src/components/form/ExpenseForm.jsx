import React, { useState } from 'react'
import './expenseForm.css'


function ExpenseForm({onAddHandler}) {
    const[text , setText] = useState("");
    const[amount , setAmount] = useState()
    const[Type , setType] = useState("expense");

         const submitHandler= (e)=>{
            e.preventDefault();
            
            if(text === "" || amount === ''){
                return
            }
            const data = {
                text : text,
                amount : parseFloat(amount),
                Type: Type
            }
            onAddHandler(data)

         setAmount("");
         setText("")
         setType("expense")

         }
    
   return (
    <div>
      <h2 className='addTransaction'>Add Transaction</h2>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label>Text</label>
          <input
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Type</label>
          <select value={Type} onChange={e => setType(e.target.value)}>
         <option value="expense">Expense</option>
        <option value="income">Income</option>
    </select>
        </div>
        <button className='add-btn'>Add Transaction</button>
      </form>
    </div>
  );
}

export default ExpenseForm
