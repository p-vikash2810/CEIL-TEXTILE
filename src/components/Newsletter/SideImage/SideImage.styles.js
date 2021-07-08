import styled from "styled-components";

export const SideImageContainer = styled.div`
  max-width: 55%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  position: relative;
  background: rgb(148, 147, 247);
  background: linear-gradient(
    217deg,
    rgba(148, 147, 247, 1) 0%,
    rgba(210, 194, 221, 1) 100%
  );

  clip-path: polygon(0 0, 100% 0, 100% 100%, 15% 100%);
  border-top-right-radius: 26px;
  border-bottom-right-radius: 26px;

  @media screen and (max-width: 960px) {
    max-width: 100%;
    width: 100%;
    /* flex: 2; */
    clip-path: none;
    border-radius: 26px;
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 100%;
  /* border-top-right-radius: 26px;
  border-bottom-right-radius: 26px; */
  border-radius: 26px;

  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    /* border-top-right-radius: 26px;
    border-bottom-right-radius: 26px; */
    border-radius: 26px;

  }

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 100%;
    border: 26px;

    img {
      border-radius: 26px;
    }
  }
`;
