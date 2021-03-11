import React from 'react';
import { render, screen ,fireEvent,RenderResult} from '@testing-library/react';
import {Action} from './Action';
import {actionDriver,IActionDriver} from "./Action.driver"

describe("Action component",()=>{
  let driver:IActionDriver,wrapper:RenderResult;
  beforeEach(()=>{
    wrapper = render(<Action action= {{date:"01/02/2020",amount:100}}/>)
    driver = actionDriver(wrapper)
  })
  it("should contain date and amount",()=>{
      expect(driver.getDate()).toBe("01/02/2020")
  })
})
