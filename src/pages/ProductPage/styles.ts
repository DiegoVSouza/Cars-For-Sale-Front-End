import styled from 'styled-components';
import { darken } from 'polished';
export const Container = styled.main`

`

export const Content = styled.article`
  max-width: 1120px;
  margin: auto;
  padding: 4rem 2rem;
  color: var(--white);
  

 

  h1{
    position: relative;
    height: 5rem;

    &::after{
      content: '';
            height: 4px;
            position: absolute;
            bottom: 0;
            left: 0;
            border-radius: 5px 5px 0 0 ;
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


`

export const ProductSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
  width: 100%;
  color: var(--black);



  


  section{
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &:first-child{
      width: 30%;
      border: solid 2px var(--gray);
      border-radius: 10px;
      padding: 1rem 1rem 1rem 2rem ;
      background: var(--white);
    }
    
  }

  svg{
    margin-right: 1rem;
    fill: #0a0a0a;
    width: 1.5rem;
    height: 1.5rem;
  }

  div{
    display: flex;
    align-items: center;
  }

    
    label{
      height: 2rem;
      font-size: 1rem;
      line-height: 3rem;
      color: var(--gray-bold);
      margin-bottom: 1rem;
      margin-right: 0.5rem;

    
    span{
      height: 2rem;
      line-height: 3rem;
      color: var(--black);
      font-size: 1.25rem;
      font-weight: bold
    }

    }
  

  button{
    background: var(--blue);
    font-size: 1rem;
    color: var(--white);
    padding: 0.75rem;
    margin-top: 1rem;
    border-style: none;
    border-radius: 10px;
    width: 90%;

                    a{
                        color: var(--white);
                        text-decoration: none;  
                    }
  }

  img{
    max-width: 100%;
    height: auto;

    @media (max-width: 720px) {
      display: none;
    }
    
  }
`




