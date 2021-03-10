import {useState} from 'react';
import './App.scss';
import {MoneyActionForm} from "./Components/MoneyActionForm/MoneyActionForm"
import {Action} from "./Components/Action/Action"

function App() {
  const [total,setTotal] = useState<number>(0)
  const [moneyActions,setMoneyActions] = useState<any[]>([])
  const handleAddition = (amountInput:string)=>{
      setTotal(total+Number(amountInput))
      const newMoneyActions = [{amount:amountInput},...moneyActions]
      setMoneyActions(newMoneyActions)}
  return (
    <div className="App">
      <h2 data-testid="app-title">Money Tracker</h2>
      <h2 >Total: <span data-testid="total-money">{total}</span></h2>
        <div>
        {moneyActions.map((action,index) =>{
          return <Action key={index} amount={action.amount}/>
        })}
        </div>
      <MoneyActionForm onAdd={handleAddition}/>
    </div>
  );
}

export default App;
