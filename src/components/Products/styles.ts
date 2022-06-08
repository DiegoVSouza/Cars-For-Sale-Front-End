import styled from "styled-components";
import { darken, lighten } from 'polished';


export const Container = styled.main`
    display: flex;
    justify-content: flex-start;
    padding: 0 4rem;
    padding: 0 2rem;
    max-width: 1120px;
    margin: auto;

`

export const Card = styled.section`
    
    /* background: var(--white); */
    border-radius: 10px;
    /* overflow: hidden; */
    width: 100%;

    >h1{
        color: var(--white);
        position: relative;
        height: 3rem;
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
`