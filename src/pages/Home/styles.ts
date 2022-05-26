import styled from 'styled-components';
import { darken } from 'polished';
export const Container = styled.main`
  background: white;
`

export const Header = styled.header`
  width: 100%;
  background: var(--red);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem 0;

  article{
    width: 90%;
    background: var(--red);
    display: flex;
    justify-content: space-between;
    align-items: center;

  div{
    display: flex;
    color: var(--black);
    justify-items: center;
    justify-content: center;

    ul{
      list-style: none;
      display: flex;

      li{
        padding: 0rem 2rem;
      }
    }
    

    label{
      font-size: 0.75rem;  
    }

    &:last-of-type{
      img{
        width: 3rem;  
      }
    }

  }

  }
 
  
`


