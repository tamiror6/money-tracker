import React from 'react';
import { render, screen ,fireEvent,RenderResult} from '@testing-library/react';
import App from './App';
import {appDriver,IAppDriver} from "./app.driver"

describe("check good flow of the app",()=>{
  let driver:IAppDriver,wrapper:RenderResult;
  beforeEach(()=>{
    wrapper = render(<App />)
    driver = appDriver(wrapper)
  })
  test('general flow of app', () => {
    expect(wrapper.queryByTestId("app-title")?.innerHTML).toBe("Money Tracker")
    expect(driver.getTotalMoney()).toBe("0")
    driver.changeAmountInput("51")
    driver.changeExpenseOrIncomeSelector("income")
    driver.clickAdd()
    expect(driver.getTotalMoney()).toBe("51")
    driver.changeAmountInput("5")
    driver.changeExpenseOrIncomeSelector("income")
    driver.clickAdd()
    expect(driver.getTotalMoney()).toBe("56")
    expect(wrapper.queryAllByTestId("money-change-row").length).toBe(2)
    
  });
})
