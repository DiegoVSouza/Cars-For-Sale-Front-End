import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.header`
   width: 100%;
  background: var(--red);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem 0;
  box-shadow: 0 2px 10px 8px ${darken(0.05, '#474747')};

  a{
    text-decoration: none;
    color: var(--black);
    cursor: pointer;
  }

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
      div{
        flex-direction: column;
        text-align: right;
        margin-right: 0.5rem;
        label{
          cursor: pointer;
        }
      }
      
      img{
        width: 3rem;  
      }
    }

  }

  }
 
`
  