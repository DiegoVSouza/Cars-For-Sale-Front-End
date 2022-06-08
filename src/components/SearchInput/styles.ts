import styled from "styled-components";
import { darken, lighten } from 'polished';


export const Container = styled.main`
    display: flex;
    position: absolute;
    top: 1rem;
    background: var(--gray-medium);
    align-items: center;
    border-radius: 10px;
    z-index: 0;
    width: 100%;

   
`

export const Card = styled.section`
    overflow: auto;
    padding: 2rem 1rem 1rem;
    width: 100%;
    max-height: 500px;
    &::-webkit-scrollbar{
        width: 5px;
        background: var(--gray--medium);
       
        
    }

    &::-webkit-scrollbar-thumb{
        background: var(--blue);
        border-radius: 10px;
        max-height: 200px;
    }

    

`

export const Cars = styled.ul`
            display: flex;
            
            flex-direction: column;
            
            list-style: none;
        
            
            li{
                display: flex;
                flex-direction: row;  
                position: relative;
                border: solid 2px var(--gray);
                justify-content: space-between;
                align-items: center;

                margin: 0.25rem 0;
                background: var(--gray-medium);
                transition: box-shadow 200ms;
                padding: 1rem 2rem; 
                border-radius: 10px;

                &:hover{
                    box-shadow: 0 2px 10px 1px ${darken(0.3, 'white')};
                }
                
                img{
                    width: auto;
                    height: 5rem;
                    align-self: flex-start;
                }

                strong{
                    font-size: 2.5rem;
                    color: var(--blue);
                    margin-top: 0.25rem;
                    font-weight: 900;
                }
                div{
                    display: flex;
                    flex-direction: column;
                    margin: 0 2rem;
                    justify-content: center;
                    
                    
                }
                label{
                    font-size: 1.25rem;
                    font-weight: 600;
                    left: 2rem;
                    top: 0.5rem;
                    line-height: 2rem;
                    &:nth-of-type(2){
                        font-size: 1.5rem;
                        font-weight: 500;
                    }
                    &:nth-of-type(3){
                        font-size: 1rem;
                        font-weight: 500;
                    }
                }

            }
`