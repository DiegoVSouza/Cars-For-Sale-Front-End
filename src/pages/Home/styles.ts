import styled from "styled-components";
import { darken } from "polished";
export const Container = styled.main`

`;

export const Content = styled.section`
  max-width: 1120px;
  margin: auto;
  padding: 4rem 2rem;
  color: var(--white);
  display: flex;
  justify-content: space-between;

  label {
    font-size: 1.25rem;
  }

  h2 {
    font-size: 2.5rem;
    margin-top: 2rem;
    line-height: 1rem;
    @media (max-width: 1080px) {
      font-size: 1.5rem;
    }
    @media (max-width: 720px) {
      font-size: 1.25rem;
    }
  }
  h1 {
    font-size: 3rem;
    @media (max-width: 1080px) {
      font-size: 2.5rem;
    }
    @media (max-width: 720px) {
      font-size: 2rem;
    }
    span {
      color: var(--blue);
      font-size: 4rem;
      font-weight: 900;
      @media (max-width: 1080px) {
        font-size: 3rem;
      }
      @media (max-width: 720px) {
        font-size: 2rem;
      }
    }
  }

  img {
    /* width: 30rem; */
    max-width: 45%;
    height: auto;

    @media (max-width: 720px) {
      display: none;
    }
  }
  svg {
    max-width: 10%;
    height: auto;
    fill: var(--white);
    margin-top: 2rem;

    & + svg {
      margin-left: 1rem;
    }
  }
`;
