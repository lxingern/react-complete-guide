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

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onYearSelection={yearChangeHandler} />
                {props.items.map((expense) => (
                    <ExpenseItem 
                        title={expense.title} 
                        amount={expense.amount} 
                        date={expense.date} 
                    />
                ))}
            </Card>
        </div>

    )
}

export default Expenses