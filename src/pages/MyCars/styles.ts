import styled from 'styled-components';
import { darken } from 'polished';
export const Container = styled.main`

    
`

export const Content = styled.section`
  max-width: 1120px;
  margin: auto;
  padding: 4rem 2rem;
  color: var(--white);
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  div{
    display: flex;
    flex-direction: column;
    justify-self: center;
    align-self: center;
    text-align: center;
    padding: 10rem 0;
    button{
                    background: var(--blue);
                    font-size: 1rem;
                    color: var(--white);
                    padding: 0.75rem;
                    margin-top: 1rem;
                    border-style: none;
                    border-radius: 10px;
                    width: 100%;
                    align-self: center;

                    a{
                        color: var(--white);
                        text-decoration: none;  
                    }
                }


  }

  h1{
        color: var(--white);
        position: relative;
        height: 5rem;        
        font-size: 3rem;
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

        font-size: 3rem;
    @media (max-width: 1080px) {
      font-size: 2.5rem;
    }
    @media (max-width: 720px) {
      font-size: 2rem;
    }
  }
   

  

  label{
    font-size: 1.25rem;
  }

  span{
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

  h2{
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


  img{
    /* width: 30rem; */
    max-width: 45%;
    height: auto;

    @media (max-width: 720px) {
      display: none;
    } 
    
  }
  >svg{
      max-width: 10%;
      height: auto;
      fill: var(--white);
      margin-top: 2rem;

      & + svg{
        margin-left: 1rem;
      }
    }
`

export const Cars = styled.ul`
            width: 100%;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
            grid-auto-rows: 1fr;
            column-gap: 1rem;
            
            
            list-style: none;
            
            li{
                display: flex;
                flex-direction: column;  
                position: relative;

                margin: 1rem 0;
                border: 2px solid var(--gray);
                transition: box-shadow 200ms;
                padding: 1rem 2rem; 
                border-radius: 10px;

                color: var(--white);

                &:hover{
                    box-shadow: 0 10px 10px 1px ${darken(0.1, '#474747')};
                }
                
                img{
                    max-width: 20rem;
                    height: auto;
                    align-self: center;
                }

                strong{
                    font-size: 2.5rem;
                    color: var(--blue);
                    margin-top: 0.25rem;
                    font-weight: 900;
                }

                label{
                    font-size: 1.25rem;
                    margin-top: 1rem;
                    position: absolute;
                    left: 2rem;
                    top: 0.5rem;
                    &:nth-of-type(2){
                        top: 2rem;
                        font-size: 1.5rem;
                        font-weight: 600;
                    }
                    &:nth-of-type(3){
                        top: 4rem;
                        font-size: 1rem;
                    }
                }

                svg{
                  width: 16px;
                  height: 16px;
                  position: absolute;
                  right: 1rem;
                  top: 1rem;
                  color: var(--white);
                }

                
            }
`

export const NoAccount = styled.main`
  max-width: 1120px;
  margin: auto;
  padding: 4rem 2rem;
  color: var(--white);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  text-align: center;
  div{
    padding: 10rem 0;
  }
  h1{
    color: var(--white);
    text-align: center;
    @media (max-width: 1080px) {
      font-size: 2.5rem;
    }
    @media (max-width: 720px) {
      font-size: 2rem;
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
                    width: 80%;
                    align-self: center;

                    a{
                        color: var(--white);
                        text-decoration: none;  
                    }
                }
`