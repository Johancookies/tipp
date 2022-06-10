import React from "react";
import { MainContainer } from "./TipCard.styled";

function TipCard() {
  return (
    <MainContainer>
      <div className="content">
        <div className="billAmount">
          <div className="inputContainer">
            <b className="subTitle">Bill</b>
            <input type="number" />
          </div>
          <div className="topPercentage">
            <b className="subTitle">Select Tip %</b>
            <div className="buttonsContainer">
              <div className="button">
                <b>5%</b>
              </div>
              <div className="button">
                <b>10%</b>
              </div>
              <div className="button">
                <b>15%</b>
              </div>
              <div className="button">
                <b>25%</b>
              </div>
              <div className="button selected">
                <b>50%</b>
              </div>
              <div className="button custom">
                <b>Custom</b>
              </div>
            </div>
          </div>
          <div className="inputContainer">
            <b className="subTitle">Number of people</b>
            <input type="number" />
          </div>
        </div>
        {/* right panel */}
        <div className="totalContainer">
          <div className="items">
            <div className="item">
              <div className="description">
                <b className="itemTitle">Tip Amount</b>
                <span className="category">/ person</span>
              </div>
              <b className="total">$0.00</b>
            </div>
            <div className="item">
              <div className="description">
                <b className="itemTitle">Tip Amount</b>
                <span className="category">/ person</span>
              </div>
              <b className="total">$0.00</b>
            </div>
          </div>
          <div className="buttonReset">RESET</div>
        </div>
      </div>
    </MainContainer>
  );
}

export default TipCard;
