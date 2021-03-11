import { RenderResult } from "@testing-library/react"

export interface IActionDriver{
            getDate():string,

        }
export const actionDriver=(wrapper:RenderResult)=>{
    const getDate = ():string=>{
        return wrapper.getByTestId("action-date").textContent!
    }
    return {getDate}
}