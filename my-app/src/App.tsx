import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <h2 data-testid="app-title">Money Tracker</h2>
      <h2 data-testid="total-expenses">Total: 0</h2>
      <input data-testid="amount"></input>
      <select data-testid="income-expense-selctor"></select>
      <button data-testid="add-btn"></button>
    </div>
  );
}

export default App;
