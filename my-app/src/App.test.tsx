import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe("check good flow of the app",()=>{
  beforeEach(()=>{
    render(<App />);
  })
  test('renders title', () => {
    expect(screen.queryByTestId("app-title")).not.toBeNull()
    
  });
})
