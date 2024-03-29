

import './Expenses.css'
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const filterChangeHandler = (filteredYear) => { 
      console.log('Year data in Expenses.js ' + filteredYear)
  }

    return (
        <Card className="expenses">
          <ExpensesFilter onChangeFilter={filterChangeHandler} />
        { 
          props.expenses.map((expense) =>{ 
              return <ExpenseItem expenseData={expense} />
          })
        }   
        </Card>
    )
}

export default Expenses