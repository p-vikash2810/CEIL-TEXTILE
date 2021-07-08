import styled from "styled-components";

export const Button = styled.button`
  border: none;
  height: 50px;
  width: auto;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: rgb(250, 165, 112);
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  box-shadow: inset 0 0 0 0 rgb(245, 220, 208);
  transition: ease-out 0.3s;
  border-radius: 5px;

  &:hover {
      /* background-color: rgb(247, 206, 181); */
      color: black;
      box-shadow: inset 400px 0 0 0 rgb(245, 220, 208);

  }
`;
