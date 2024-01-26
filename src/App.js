import './App.css';
import ExpenseItem from './components/ExpenseItem';

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
  return (
    <div className="App">
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
