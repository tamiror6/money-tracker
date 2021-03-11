import React from 'react';
import { render ,RenderResult} from '@testing-library/react';
import {Action} from './Action';
import {actionDriver,IActionDriver} from "./Action.driver"

describe("Action component",()=>{
  let driver:IActionDriver,wrapper:RenderResult;
  beforeEach(()=>{
    wrapper = render(<Action action= {{date:"01/02/2020",amount:100}}/>)
    driver = actionDriver(wrapper)
  })
  it("should contain date and amount",()=>{ // actually there is nothing to test on this component, you can ignor this test
      expect(driver.getDate()).toBe("01/02/2020")
  })
})
