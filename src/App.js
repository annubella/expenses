import './App.css';
import ExpenseItem from './components/Expenses/ExpenseItem';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expenses =[
    { 
      date: new Date(2024, 17, 6),
      title: 'New Book',
      price: 30.99
    },
    {
      date: new Date(2023, 9, 6),
      title: 'New jeans',
      price: 69.99 
    }  
  ] 

  const addExpenseHandler = (expense) =>{
    console.log('in apps.js')
    console.log(expense)
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} ></NewExpense>
      <div className='card expenses'>
      <ExpenseItem
        expenseData={expenses[0]}   
      />
      <ExpenseItem
        expenseData={expenses[1]}   
      />
      </div>  
    </div>
  );
  }  

export default App;
