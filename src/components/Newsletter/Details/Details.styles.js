import styled from "styled-components";
import { color1, color2} from "../../../globalStyles"

export const DetailContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const HeadingOne = styled.h1`
  font-size: 34px;
  line-height: 34px;
  margin-bottom: 20px;
  color: ${({ lightText }) => (lightText ? "#fff" : "#2a3b4a")};
  font-family: "Carter+One";

`;
export const HeadingTwo = styled.span`
  font-size: 34px;
  line-height: 34px;
  margin-bottom: 40px;
  text-align: center;
  color: ${({ lightText }) => (lightText ? "#fff" : "#2a3b4a")};
`;
export const Description = styled.span`
  font-size: 22px;
  line-height: 28px;
  color: #2a3b4a;
  width: 70%;
  text-align: center;
  margin-bottom: 20px;
  color: ${({ lightText }) => (lightText ? "#fff" : "#2a3b4a")};
`;
export const Button = styled.div`
  border: 1px solid #2a3b4a;
  color: ${({ btnLight }) => (btnLight ? "#2a3b4a" : "#fff")};
  background: ${({ btnLight }) => (btnLight ? "#fff" : "#2a3b4a")};
  padding: 14px 20px;
  font-weight: 800;
  font-size: 13px;
  line-height: 13px;
  cursor: pointer;

  &:hover {
    color: ${({ btnLight }) => (btnLight ? "#fff" : "#2a3b4a")};
    background: ${({ btnLight }) => (btnLight ? `${color2}` : "#fff")};
  }
`;