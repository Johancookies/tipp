import React from "react";
import TipCard from "../TipCard/TipCard";
import { MainContainer } from "./Main.styled";

function Main() {
  return (
    <MainContainer>
      <div className="titleContainer">
        <b className="title">SPLI</b>
        <b className="title">TTER</b>
      </div>
      <TipCard />
    </MainContainer>
  );
}

export default Main;
