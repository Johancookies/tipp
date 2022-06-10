import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: #ffffff;
  border-radius: 20px;
  width: 700px;
  -webkit-box-shadow: 0px 10px 18px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 10px 18px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 10px 18px 0px rgba(0, 0, 0, 0.1);
  padding: 25px;

  .content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;
  }

  .billAmount {
    display: flex;
    flex-direction: column;
  }

  .inputContainer {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 10px 0px;
  }

  .inputContainer input {
    width: 100%;
    border: none;
    background-color: #f3f8fb;
    color: #1b4344;
    height: 35px;
    outline: none;
    padding: 10px;
    font-size: 16px;
    font-weight: 700;
    border-radius: 4px;
  }

  .inputContainer input:focus {
    border: 2px solid #57aa9d;
  }

  .subTitle {
    color: #818e8c;
    font-size: 12px;
    margin-bottom: 5px;
    width: 100%;
  }

  .topPercentage {
    margin: 10px 0px;
  }

  .buttonsContainer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    margin-top: 4px;
  }

  .button {
    height: 40px;
    background-color: #00474b;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-size: 18px;
    cursor: pointer;
    transition: all 0.4s ease;
  }

  .button:hover {
    background-color: #9fe8df;
    color: #055256;
  }

  .selected {
    background-color: #26c2ad;
    color: #055256;
  }

  .custom {
    background-color: #f1f9fb;
    color: #055256;
  }

  .totalContainer {
    background-color: #00474b;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    padding: 30px 25px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  .items,
  .description {
    display: flex;
    flex-direction: column;
  }

  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
  }

  .itemTitle {
    font-size: 12px;
    color: #ffffff;
  }

  .category {
    color: #569094;
    font-size: 10px;
  }

  .total {
    font-size: 40px;
    color: #20c3ac;
  }

  .buttonReset {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #0a514f;
    background-color: #26c2ad;
    transition: all 0.4s ease;
    border-radius: 5px;
    font-weight: 700;
    cursor: pointer;
  }

  .buttonReset:hover {
    background-color: #9fe8df;
  }
`;
