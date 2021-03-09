import { RenderResult,fireEvent } from "@testing-library/react"

export interface IAppDriver{
    clickAdd():void,
    changeAmountInput(amount:string):void,
    changeExpenseOrIncomeSelector(expenseOrIncome: string): void,

}
export const appDriver=(wrapper:RenderResult):IAppDriver=>{
    const clickAdd=()=>{
        const addButton = wrapper.getByTestId("add-btn")
    fireEvent.click(addButton)
    } 
    const changeAmountInput = (amount:string)=>{
        const amountInput = wrapper.getByTestId("amount")
    fireEvent.change(amountInput, { target: { value: amount } })
    }
    const changeExpenseOrIncomeSelector = (expenseOrIncome:string)=>{
        const incomeOrExpense = wrapper.getByTestId("income-expense-selctor")
    fireEvent.change(incomeOrExpense, { target: { value: expenseOrIncome} })
    }
    return {clickAdd,changeAmountInput,changeExpenseOrIncomeSelector}
}