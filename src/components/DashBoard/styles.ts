import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--background);

`

export const Card = styled.section`
    margin-top: 4rem;
    background: var(--white);
    border-radius: 10px;

`

export const Cars = styled.ul`

            display: grid;
            grid-template-columns: repeat(3, 1fr);

            list-style: none;
            
            li{
                display: flex;
                flex-direction: column;  
                margin: 2rem 4rem;
                background: white;
                transition: box-shadow 200ms;
                padding: 1rem 2rem; 

                &:hover{
                    box-shadow: 0 10px 10px 1px ${darken(0.1, 'white')};
                }
                
                img{
                    width: 15rem;
                }

                strong{
                    font-size: 1rem;
                    margin-top: 1rem;
                }

                label{
                    font-size: 1.5rem;
                    color: var(--blue);
                    margin-top: 0.75rem;
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