import {useState} from 'react';
import logo from './logo.svg';
import './App.scss';
import {MoneyActionForm} from "./Components/MoneyActionForm/MoneyActionForm"

function App() {
  const [total,setTotal] = useState<number>(0)
  
  return (
    <div className="App">
      <h2 data-testid="app-title">Money Tracker</h2>
      <h2 >Total: <span data-testid="total-money">{total}</span></h2>
      <MoneyActionForm onAdd={(amountInput:string)=>{setTotal(total+Number(amountInput))}}/>
    </div>
  );
}

export default App;
