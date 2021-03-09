import {useState} from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  const [total,setTotal] = useState<number>(0)
  const [amountInput,setAmountInput] = useState<string>("")
  return (
    <div className="App">
      <h2 data-testid="app-title">Money Tracker</h2>
      <h2 >Total: <span data-testid="total-money">{total}</span></h2>
      <input data-testid="amount" value={amountInput} onChange={(e)=>{setAmountInput(e.target.value)}}></input>
      <select data-testid="income-expense-selctor"></select>
      <button data-testid="add-btn" onClick={()=>{
        setTotal(total + Number(amountInput))
      }}></button>
    </div>
  );
}

export default App;
