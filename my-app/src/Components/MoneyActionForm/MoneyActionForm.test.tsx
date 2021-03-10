import React from 'react';
import { render, screen ,fireEvent,RenderResult} from '@testing-library/react';
import {MoneyActionForm,ActionSelections} from './MoneyActionForm';
import {formDriver,IformDriver} from "./MoneyActionForm.Driver"

describe("check form changing",()=>{
  let driver:IformDriver,wrapper:RenderResult;
  beforeEach(()=>{
    wrapper = render(<MoneyActionForm onAdd={(amount:string)=>{}}/>)
    driver = formDriver(wrapper)
  })
  describe('when form renders', () => {
    it("should have all the elements correctly and inputs need to be updated after user change inputs",()=>{
      driver.changeExpenseOrIncomeSelector(ActionSelections.EXPENSE)
      expect(driver.getSelectedIncomeOrExpense()).toBe(ActionSelections.EXPENSE)
      driver.changeExpenseOrIncomeSelector(ActionSelections.INCOME)
      expect(driver.getSelectedIncomeOrExpense()).toBe(ActionSelections.INCOME)
      driver.changeAmountInput("231")
      expect(driver.getAmountInput()).toBe("231")
    })
    
  });
})
