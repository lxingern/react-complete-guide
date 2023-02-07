import { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
    const [isNewExpense, setIsNewExpense] = useState(false)
    
    const addNewExpenseHandler = () => {
        setIsNewExpense(true)
    }
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        setIsNewExpense(false)
    }
    const cancelHandler = () => {
        setIsNewExpense(false)
    }

    let newExpenseContent = <button onClick={addNewExpenseHandler}>Add New Expense</button>
    if (isNewExpense) {
        newExpenseContent = <ExpenseForm onCancel={cancelHandler} onSaveExpenseData={saveExpenseDataHandler} />
    }
    
    return (
        <div className="new-expense">
            {newExpenseContent}
        </div>
    )
}

export default NewExpense