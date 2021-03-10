import React, { useState, useEffect, Component } from "react";
export interface IMoneyActionFormProps{
    onAdd(amountInput:string):void
}

export enum ActionSelections{
  NOT_SELECTED= "income/expense",
  INCOME="income",
  EXPENSE="expense"
}
export const MoneyActionForm:React.FC<IMoneyActionFormProps> = (props) => {
    const [amountInput,setAmountInput] = useState<string>("")
    const [actionKind,setActionKind] = useState<string>(ActionSelections.NOT_SELECTED)

    return (
      <div>
        <input data-testid="amount" value={amountInput} onChange={(e)=>{setAmountInput(e.target.value)}}></input>
      <select data-testid="income-expense-selctor" value={actionKind} onChange={(e:React.FormEvent<HTMLSelectElement>)=>{setActionKind(e.currentTarget.value)}}>
        {Object.values(ActionSelections).map((val, index) => (
          <option key={index}>{val}</option>
        ))}
      </select>
      <button data-testid="add-btn" onClick={()=>{props.onAdd(amountInput)}}>Add</button>
      </div>
    );
  };


