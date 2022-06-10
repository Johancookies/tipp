import styled from "styled-components";

export const MainContainer = styled.div`
  color: #46696b;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  @media (max-width: 768px) {
    align-items: flex-end;
  }

  .titleContainer {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 50vw;
    top: 200px;
    transform: translateX(-50%);
    @media (max-width: 768px) {
      top: 30px;
    }
  }

  .title {
    font-size: 20px;
    letter-spacing: 8px;
    @media (max-width: 768px) {
      font-size: 25px;
    }
  }
`;
