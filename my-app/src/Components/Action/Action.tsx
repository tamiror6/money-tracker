import React, { Component } from "react";
export interface IActionProps{
    index:number,

}
export const Action:React.FC<IActionProps> = (props) => {
    return (
        <div data-testid="money-change-row" key={props.index}></div>
    );
  };
