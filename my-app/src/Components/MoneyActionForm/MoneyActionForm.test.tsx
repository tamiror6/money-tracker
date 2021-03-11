import { render,RenderResult} from '@testing-library/react';
import {MoneyActionForm,ActionSelections} from './MoneyActionForm';
import {formDriver,IformDriver} from "./MoneyActionForm.Driver"

describe("check form changing",()=>{
  let driver:IformDriver,wrapper:RenderResult,onAddMocked:any;
  beforeEach(()=>{
    onAddMocked = jest.fn()
    wrapper = render(<MoneyActionForm onAdd={onAddMocked}/>)
    driver = formDriver(wrapper)
  })

  it("should change correctly and inputs need to be updated after user change inputs",()=>{
    driver.changeExpenseOrIncomeSelector(ActionSelections.EXPENSE)
    expect(driver.getSelectedIncomeOrExpense()).toBe(ActionSelections.EXPENSE)
    driver.changeExpenseOrIncomeSelector(ActionSelections.INCOME)
    expect(driver.getSelectedIncomeOrExpense()).toBe(ActionSelections.INCOME)
    driver.changeAmountInput("231")
    expect(driver.getAmountInput()).toBe("231")
  })

  it("should call addAmount with the right amount , if icome positive and if expense negative",()=>{
    driver.changeAmountInput("22")
    driver.changeExpenseOrIncomeSelector(ActionSelections.INCOME)
    driver.clickAdd()
    expect(onAddMocked).toHaveBeenCalledWith(22)

    driver.changeAmountInput("100")
    driver.changeExpenseOrIncomeSelector(ActionSelections.EXPENSE)
    driver.clickAdd()
    expect(onAddMocked).toHaveBeenCalledWith(-100)
  })

  it("shouldnt be called if invalid amount or don't choose expense or income", ()=>{
    driver.changeAmountInput("22")
    driver.clickAdd()
    driver.changeAmountInput("aaa")
    driver.changeExpenseOrIncomeSelector(ActionSelections.EXPENSE)
    driver.clickAdd()
    expect(onAddMocked).toHaveBeenCalledTimes(0)
  })



    

})
