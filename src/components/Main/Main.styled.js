import styled from "styled-components";

export const MainContainer = styled.div`
  color: #46696b;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  .titleContainer {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 50vw;
    top: 200px;
    transform: translateX(-50%);
  }

  .title {
    font-size: 20px;
    letter-spacing: 8px;
  }
`;
