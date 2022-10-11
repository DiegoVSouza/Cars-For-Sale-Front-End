import styled from "styled-components";
import { darken } from "polished";
export const Container = styled.main`
  .thumb {
    display: inline-flex;
    border-radius: 5px;
    margin: 2rem;
    width: 30%;
    height: 5rem;
    box-sizing: border-box;
    display: flex;
    h2{
      align-self: center;
      justify-self: center;
      margin-left: 1rem;
    }
  }

  .imagesContainer{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .aside {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 16;
  }
  #baseStyle{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-width: 2;
    border-radius: 2;
    border-color: #eeeeee;
    border-style: dashed;
    background-color: #fafafa;
    color: #bdbdbd;
    outline: none;
    transition: all .24s ease-in-out;
    cursor: pointer;
  }
  .img {
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    -webkit-box-shadow: 5px 4px 15px 5px rgba(0,0,0,0.18); 
box-shadow: 5px 4px 15px 5px rgba(0,0,0,0.18);
  }
`;

export const Content = styled.article`
  max-width: 1120px;
  margin: auto;
  padding: 4rem 2rem;
  color: var(--black);

  h1 {
    position: relative;
    height: 5rem;

    &::after {
      content: "";
      height: 4px;
      position: absolute;
      bottom: 0;
      left: 0;
      border-radius: 5px 5px 0 0;
      background: var(--blue);
      width: 60%;
    }
    font-size: 4rem;
    @media (max-width: 1080px) {
      font-size: 3.5rem;
    }
    @media (max-width: 720px) {
      font-size: 3rem;
    }
  }
`;

export const ProductSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
  width: 100%;
  background: var(--white);
  border: solid 2px var(--gray);
  border-radius: 10px;
  padding: 3rem 2rem;

  > div {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: auto;

    .picture {
      img {
        width: 100%;
        height: auto;
      }
    }
    input[type="file"] {
      display: none;
    }
    label {
      font-size: 1rem;
      position: absolute;
      font-weight: bold;
      top: 0.5rem;
      padding: 1rem;
      border-radius: 10px;
      &.hidden{
        display: none;
      }
      &.labelError{
        top: 1rem;
        color: red;
      }
    }
    img {
      max-width: 100%;
      height: auto;
    }
  }

  form {
    width: 50%;
    display: flex;
    flex-direction: column;
    position: relative;
    input {
      width: 90%;
      border-radius: 8px;
      border-style: none;
      padding: 0.5rem 1rem;
      transition: all 200ms;
      border: solid 0.5px gray;
    }
    p {
      color: red;
      margin: 0.5rem 0;
    }
    label {
      font-size: 1rem;
      margin-bottom: 0.25rem;
      & + input {
      }
    }

    > div {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      div {
        margin: 0.5rem 0;
        label {
          font-size: 0.75rem;
          display: block;
          margin-bottom: 0.25rem;
        }
        input {
          width: 80%;
        }
        select {
          border-radius: 5px;
          width: 8rem;
          border: 1px solid var(--gray-medium);
          height: 1.5rem;
        }
      }

      .ratiodiv {
        height: 2rem;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          margin-bottom: 4rem;

        span {
          line-height: 2rem;
          font-size: 1rem;
          padding: 0 1rem 0 0.5rem;
          
        }

        label{
          transform: translateY(20%);
          margin-right: 1rem;
          cursor: pointer;
        }

        input + label {
          position: relative;
        }

        input {
          cursor: pointer;
          width: auto;
          position: relative;
          width: 16px;
          height: 16px;

          &:checked + label::after {
            content: "";
            background-color: var(--blue);
            width: 12px;
            height: 12px;
            border-radius: 50%;
            position: absolute;
            left: -14px;
            top: 1px;
          }
          &:checked + span::before {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            border: solid 2px;
            vertical-align: bottom;
          }
        }
      }
    }
  }

  input[type="submit"] {
    background: var(--blue);
    position: absolute;
    font-size: 1rem;
    color: var(--white);
    padding: 0.75rem;
    margin-top: 1rem;
    border-style: none;
    border-radius: 10px;
    width: 90%;
    left: 50%;
    bottom: -5%;

    a {
      color: var(--white);
      text-decoration: none;
    }
  }
`;
