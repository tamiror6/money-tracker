import React, { useState, useEffect, Component } from "react";
export interface IMoneyActionFormProps{
    onAdd(amountInput:string):void
}
export const MoneyActionForm:React.FC<IMoneyActionFormProps> = (props) => {
    const [amountInput,setAmountInput] = useState<string>("")

    return (
      <div>
        <input data-testid="amount" value={amountInput} onChange={(e)=>{setAmountInput(e.target.value)}}></input>
      <select data-testid="income-expense-selctor"></select>
      <button data-testid="add-btn" onClick={()=>{props.onAdd(amountInput)}}></button>
      </div>
    );
  };


