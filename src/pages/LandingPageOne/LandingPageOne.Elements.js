import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  /* flex: 1; */
  width: 100vw;
  height: 100vh;
  /* margin-top: 100vh; */
  /* position: absolute; */
  /* z-index: -1; */
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
  }
`