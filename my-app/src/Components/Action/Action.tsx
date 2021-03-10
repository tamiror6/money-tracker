import React, { Component } from "react";


interface IActionProps{
    action:Iaction
}
export interface Iaction{
    amount:number,
    date:string,
  }
export const Action:React.FC<IActionProps> = ({action}) => {
    return (
        <div data-testid="money-change-row" >
            <div data-testid="action-date">{action.date}</div>
            <div>{action.amount}</div>
        </div>
    );
  };
