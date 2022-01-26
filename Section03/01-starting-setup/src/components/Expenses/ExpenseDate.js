
function ExpenseDate(props){
<div>
    <div>{props.date.toLocaleString('en-US', {month: 'long'})}</div>
    <div>{props.Year}</div>
    <div>{props.Day}</div>
</div>
}

export default ExpenseDate;