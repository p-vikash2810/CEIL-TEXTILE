import styled, {keyframes} from "styled-components";

const animation = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-100%, 0);
  }
`
export const FooterSec = styled.div`
  width: 100vw;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50%;
  justify-content: space-between;
  margin: auto;
`;
export const Heading = styled.span`
  font-size: 20px;
  color: #2a3b4a;
  text-transform: uppercase;
`;
export const TextSec = styled.div`
  display: flex;
  /* margin: 0 auto;
  white-space: nowrap;
  overflow: hidden;
  animation-name: ${animation}; */
  /* position: absolute; */
  /* display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(6, calc(50% - 40px));
  grid-template-rows: minmax(150px, 1fr); */
  
`;

export const TextWrapper = styled.div`
  display: flex;
  /* display: inline-block; */
  /* padding-left: 100%; */
  /* animation: marquee 5s linear infinite; */
`;
export const Text = styled.span`
  font-weight: 300;
  font-size: 17px;
  color: #2a3b4a;
  width: 200px;
  border-left: 1px solid black;
`;
