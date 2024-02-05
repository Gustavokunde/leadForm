import { styled } from "styled-components";

export const Container = styled.section`
  input {
    height: 40px;
    background-color: white;
    border: 1px solid black;
    border-radius: 4px;
    width: 400px;
    max-width: 100%;
    color: black;
  }
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  label {
    text-align: start;
  }
  span {
    color: red;
    font-size: 12px;
    text-align: start;
  }

  strong {
    cursor: pointer;
    font-size: 12px;
    padding-left: 5px;
  }
`;
