import { useState } from 'react'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpenseItem from './ExpenseItem'

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2023')
    const yearChangeHandler = (year) => {
        setFilteredYear(year)
    }
    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear
    })
    let expensesContent = <p>No expenses found.</p>
    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((expense) => (
            <ExpenseItem 
                key={expense.id}
                title={expense.title} 
                amount={expense.amount} 
                date={expense.date} 
            />
        ))
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onYearSelection={yearChangeHandler} />
                {expensesContent}
            </Card>
        </div>

    )
}

export default Expenses