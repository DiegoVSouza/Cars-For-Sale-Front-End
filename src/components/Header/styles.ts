import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.header`
  height: 5rem;
  border-bottom: 1px solid var(--gray);
  
  >div{
        position: absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        z-index: 2;
      }
 
`

export const Content = styled.section`
    max-width: 1120px;
    position: relative;
    margin: 0 auto;
    padding: 0 2rem;
    height: 5rem;
    
    display: flex;
    align-items: center;

    nav{
      margin-left: 2rem;
      height: 5rem;
      width: 20rem;
      
      a{
        display: inline-block;
            position: relative;
            padding: 0 0.5rem;
            line-height: 5rem;
            color: var(--gray-medium);
            transition: color 200ms;
        & + a{
          margin-left: 1rem;
        }

        &:hover{
          color: var(--white);
        }

        &.active{
          color: var(--white);
          font-weight: 500;

          &::after{
            content: '';
            height: 3px;
            left: 0;
            bottom: 1px;
            border-radius: 3px 3px 0 0 ;
            width: 100%;
            position: absolute;
            background: var(--blue);
            
          }
        }


      }
    }
    >div{
      justify-self: flex-end;
      position: relative;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin: 0 1rem 0 auto;
      width: 100%;

      >svg{
        
        z-index: 2;
        cursor: pointer;
        
        

        &.open{
          width: 16px;
          height: 16px;
          position: absolute;
          left: 0.75rem;
          height: 2rem;
        }

        &.close{
          width: 32px;
          height: 32px;
          color: var(--white);
          
        }
      }
      input{
      padding: 0.25rem 1rem 0.25rem 2rem;
      border-radius: 0.5rem;
      height: 2rem;
      transition: all 200ms;
      z-index: 1;
      

      &:focus{
        background: var(--white);
      }
      &:hover{
        background: var(--white);
      }

      &.open{
        width: 100%;
        background: var(--gray-medium);
        
      }

      &.close{
        width: 2rem;
        background: none;
      }

    }
      
    }
    

    img{
    width: 3rem; 
    height: 3rem;
    }



`

export const LogIn = styled.section`

      justify-self: flex-end;
      color: var(--white);
      display: flex;
      position: relative;


      >svg{
        
        cursor: pointer;
      }

      div{
        position: absolute;
        background: var(--white);
        width: 12rem;
        height: 8rem;
        display: flex;
        align-items: center;
        flex-direction: column;
        bottom: -50%;
        left: 50%;
        transform: translate(-50%,100%);
        border-radius: 1rem;
        z-index: 3;

        &::after{
          content: '';
          background: var(--white);
          height: 2rem;
          width: 2rem;
          transform: rotate(45deg);
          position: absolute;
          top: -10%;
          z-index: -999;
        }
        button{
          background: var(--gray-medium);
          padding: 0.5rem 2rem;
          border-radius: 1rem;
          width: 10rem;
          margin-top: 1rem;
          font-weight: 500;
          

          &#singInButton{
            background: var(--blue);
            color: var(--white);
          }
            
        }
      }

`

export const LogOut = styled.section`
        justify-self: flex-end;
        color: var(--white);
        font-size: 1rem;

        div{
          display: flex;
          align-items: center;
        }
    

        button{
          width: 100%;
          display: flex;
          background: var(--gray-medium);
          padding: 0.5rem 0.75rem 0.5rem 1rem;
          border-radius: 10px;

        }

        svg{
          position: relative;
          width: 32px;
          height: 32px;
          color: var(--black);
          margin-left: 0.5rem;
        }
        

`
  