import './Expenses.css'
import ExpenseItem from './ExpenseItem'

function Expenses (props){
    return (
        <div className='expenses'>
            <ExpenseItem ExpenseData ={props.expenses[0]} /> 
            <ExpenseItem ExpenseData ={props.expenses[1]} />
        </div>
    )
} 

export default Expenses