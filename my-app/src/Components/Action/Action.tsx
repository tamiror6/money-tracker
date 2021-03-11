import React, { Component } from "react";
import "./Action.scss"

interface IActionProps{
    action:Iaction
}
export interface Iaction{
    amount:number,
    date:string,
  }
export const Action:React.FC<IActionProps> = ({action}) => {
    return (
        <div className="action-details" data-testid="money-change-row" >
            <div data-testid="action-date" className="date">{action.date}</div>
            <div className="amount">{action.amount}</div>
        </div>
    );
  };
