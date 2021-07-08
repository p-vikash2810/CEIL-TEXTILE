import styled from "styled-components";

export const CardSec = styled.div`
  background-size: cover;
  padding: 8rem 0 0;
  max-width: 35ch;
  color: white;
  border-radius: 0.5rem;
  overflow: hidden;
  transition: transform 500ms ease;
  height: 240px;
  margin: 20px;

  &:hover {
    transform: scale(1.05);

    & > div > h1::after {
      transform: scaleX(1);
    }
    & > div {
      transform: translateY(0);
      transition-delay: 500ms;
    }
    & > div > *:not(h1) {
      opacity: 1;
      transition-delay: 1000ms;
    }
  }

  &:focus-within {
    transform: scale(1.05);
    & > div {
      transform: translateY(0);
      transition-delay: -250ms;
    }
    & > div > *:not(h1) {
      opacity: 1;
      transition-delay: 1000ms;
    }

    & > div > h1::after {
      transform: scaleX(1);
    }
  }
`;
export const CardContent = styled.div`
  --padding: 1.5rem;
  padding: var(--padding);
  background: linear-gradient(
    hsl(0 0% 0% / 0),
    hsl(20 0% 0% / 0.3) 20%,
    hsl(0 0% 0% / 1)
  );
  transform: translateY(65%);
  transition: transform 500ms ease;

  & > *:not(h1) {
    opacity: 0;
    transition: opacity 500ms linear;
  }
`;

export const CardHeader = styled.h1`
  position: relative;
  width: max-content;

  &::after {
    content: "";
    position: absolute;
    height: 4px;
    left: calc(var(--padding) * -1);
    bottom: -2px;
    width: calc(100% + var(--padding));
    background: rgb(250, 165, 112);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 500ms ease;
  }
`;
export const CardDes = styled.p`
  text-align: left;
`;
