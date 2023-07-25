import '../styles/Style.css'
import ExpenseListItem from './ExpenseListItem'

export default function ExpenseList() {
    return (
    <>
        <hr style={{ width: '95%', border: '2px solid rgb(162, 198, 231)', borderRadius: '2px' }} />
        <ExpenseListItem />
        <ExpenseListItem />
        <ExpenseListItem />
        <ExpenseListItem />
        <hr style={{ width: '90%' }} />
        <hr style={{ width: '95%', border: '2px solid rgb(162, 198, 231)', borderRadius: '2px' }} />
    </>
    )
}
