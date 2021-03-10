import { RenderResult,fireEvent } from "@testing-library/react"

export interface IformDriver{
    clickAdd():void,
    changeAmountInput(amount:string):void,
    changeExpenseOrIncomeSelector(expenseOrIncome: string): void,
    getSelectedIncomeOrExpense():string,
    getAmountInput():string,

}
export const formDriver=(wrapper:RenderResult):IformDriver=>{
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
    const getSelectedIncomeOrExpense = ()=> (wrapper.queryByTestId("income-expense-selctor") as HTMLInputElement).value

    const getAmountInput = ()=> (wrapper.queryByTestId("amount") as HTMLInputElement).value
    
    return {clickAdd,changeAmountInput,changeExpenseOrIncomeSelector,getSelectedIncomeOrExpense,getAmountInput}
}