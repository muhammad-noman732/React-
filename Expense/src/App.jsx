import { useEffect, useState } from 'react';
import './App.css'
import Header from'./components/header/Header'
import ExpenseForm from './components/form/ExpenseForm'
import ExpenseList from './components/expenseList/ExpenseList'
import Income from './components/income/Income';

function App() {
        const [expense ,setExpense] = useState([{
          id : 1,
          text:"book",
          amount: 230,
          Type: "expense"
        }])

      const addExpenses = (info)=>{
           console.log("info" , info);
           setExpense([
            ...expense,
            {
              id: Date.now(),
              ...info
            }
           ])
      }

      //  delete expenses

      const delteExpenses = (id)=>{
              console.log(id);
          const newExpenses = expense.filter(expense=> expense.id !== id)
          setExpense(newExpenses)
      }

   const income =  expense.filter( expense => expense.Type === "income")
                  .reduce((acc , expense)=> acc + expense.amount, 0)
                
   const expenses =  expense
                .filter(( expense) =>  expense.Type === 'expense')
                  .reduce((acc,  expense) => acc +  expense.amount, 0);
              
    const balance = income - expenses;


    useEffect(()=>{
      const savedData = localStorage.getItem("transaction");
       
      savedData?    setExpense(JSON.parse(savedData)) : [];
    },[])

    useEffect(() => {
      localStorage.setItem('transaction', JSON.stringify(expense));
    }, [expense]);
           
  
            
    
  return (
    <div className='expenseTracker'>
           <Header balance={balance}/>
           <Income income={income} expenses ={expenses}/>
           <h3 className='History'>History:</h3>
           {
            expense.map((item)=>(
              <ExpenseList key={item.id} data = {item} deleteExpense={delteExpenses}/>
            ))
           }
           
            <ExpenseForm onAddHandler = {addExpenses}/>
    </div>
  )
}

export default App
