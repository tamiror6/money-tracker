import React from 'react';
import { render, screen ,fireEvent} from '@testing-library/react';
import App from './App';


describe("check good flow of the app",()=>{
  beforeEach(()=>{
    render(<App />);
  })
  test('general flow of app', () => {
    expect(screen.queryByTestId("app-title")?.innerHTML).toBe("Money Tracker")
    expect(screen.queryByTestId("total-expenses")?.innerHTML.includes("Total: 0")).toBe(true)
    const amountInput = screen.getByTestId("amount")
    fireEvent.change(amountInput, { target: { value: "51" } })
    const incomeOrExpense = screen.getByTestId("income-expense-selctor")
    fireEvent.change(incomeOrExpense, { target: { value: "income" } })
    const addButton = screen.getByTestId("add-btn")
    fireEvent.click(addButton)
    expect(screen.queryByTestId("total-expenses")?.innerHTML).toBe("Total: 51")
    
  });
})
