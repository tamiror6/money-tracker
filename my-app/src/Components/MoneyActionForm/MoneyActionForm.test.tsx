import React from 'react';
import { render, screen ,fireEvent,RenderResult} from '@testing-library/react';
import {MoneyActionForm} from './MoneyActionForm';
import {formDriver,IformDriver} from "./MoneyActionForm.Driver"

describe("check form changing",()=>{
  let driver:IformDriver,wrapper:RenderResult;
  beforeEach(()=>{
    wrapper = render(<MoneyActionForm onAdd={(amount:string)=>{}}/>)
    driver = formDriver(wrapper)
  })
  test('general flow of form', () => {
    
    
  });
})
