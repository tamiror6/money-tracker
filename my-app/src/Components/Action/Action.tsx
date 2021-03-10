import React, { Component } from "react";
export interface IActionProps{
    amount:string,
}
export const Action:React.FC<IActionProps> = (props) => {
    return (
        <div data-testid="money-change-row" >
            <div>{props.amount}</div>
        </div>
    );
  };
