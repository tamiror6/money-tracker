import React from 'react';
import { render,RenderResult} from '@testing-library/react';
import App from './App';
import {appDriver,IAppDriver} from "./app.driver"
import {ActionSelections} from "./Components/MoneyActionForm/MoneyActionForm"
import puppeteer from 'puppeteer'


describe("check good flow of the app",()=>{
  let driver:IAppDriver,wrapper:RenderResult;
  beforeEach(()=>{
    wrapper = render(<App />)
    driver = appDriver(wrapper)
  })
  test('general flow of app', () => {
    expect(driver.getTotalMoney()).toBe("0")
    driver.changeAmountInput("51")
    driver.changeExpenseOrIncomeSelector(ActionSelections.INCOME)
    driver.clickAdd()
    expect(driver.getTotalMoney()).toBe("51")
    driver.changeAmountInput("5")
    driver.changeExpenseOrIncomeSelector(ActionSelections.INCOME)
    driver.clickAdd()
    expect(driver.getTotalMoney()).toBe("56")
    expect(wrapper.queryAllByTestId("money-change-row").length).toBe(2)
    expect(wrapper.queryByText("51")).not.toBeNull()
    expect(wrapper.queryAllByTestId("action-date")[0].textContent).toEqual(new Date().toLocaleDateString())
  });

  test('e to e test',async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("http://localhost:3000/");
    await page.type("input[data-testid=amount]", "100");
    await page.select('select[data-testid="income-expense-selctor"]', "income");
    await page.click(`[data-testid="add-btn"]`);
    const totalAmount = await page.$eval(
      '[data-testid="total-money"]',
      (el) => el.textContent
    );
    expect(totalAmount).toBe("100")
    await page.screenshot({ path: "example.png" });
  
    await browser.close();
  })
})
