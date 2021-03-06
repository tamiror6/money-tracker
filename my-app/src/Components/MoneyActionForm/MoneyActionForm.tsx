import React, { useState} from "react";
export interface IMoneyActionFormProps{
    onAdd(amountInput:number):void
}

export enum ActionSelections{
  NOT_SELECTED= "income/expense",
  INCOME="income",
  EXPENSE="expense"
}
export const MoneyActionForm:React.FC<IMoneyActionFormProps> = (props) => {
    const [amountInput,setAmountInput] = useState<string>("")
    const [actionKind,setActionKind] = useState<string>(ActionSelections.NOT_SELECTED)
    const isNumeric = (str:string)=> { 
      return !isNaN(parseFloat(str)) 
    }
    const handleAddition = ()=>{
        if(isNumeric(amountInput)){
          switch (actionKind) {
            case ActionSelections.NOT_SELECTED:
              break;
            case ActionSelections.INCOME:
                props.onAdd(Number(amountInput))
                break;
            case ActionSelections.EXPENSE:
              props.onAdd((-1)*Number(amountInput))
              break;
          }
        }
      }


    return (
      <div>
        <input data-testid="amount" value={amountInput} onChange={(e)=>{setAmountInput(e.target.value)}}></input>
      <select data-testid="income-expense-selctor" value={actionKind} onChange={(e:React.FormEvent<HTMLSelectElement>)=>{setActionKind(e.currentTarget.value)}}>
        {Object.values(ActionSelections).map((val, index) => (
          <option key={index}>{val}</option>
        ))}
      </select>
      <button data-testid="add-btn" onClick={handleAddition}>Add</button>
      </div>
    );
  };


