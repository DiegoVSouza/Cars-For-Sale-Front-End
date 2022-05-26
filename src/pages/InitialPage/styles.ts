import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    
`

export const Card = styled.div`
    width: 40%;
    height: 100%;
    background: white;
    border-radius: 10px;

    margin-top: 2rem;
    
    box-shadow: 0 0 10px 5px ${darken(0.1, '#ff0000')};

    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        width: 6rem;
        margin-bottom: 0.5rem;
        margin-top: 4rem; 
        &:last-of-type{
            width: 15rem;
            margin-top: 0; 
            margin-bottom: 1rem;
        }
    }
    
    h1{
        color: var(--blue);
        padding-bottom: 1rem;
        text-align: center;
    }
    h3{
        color: var(--gray);
        padding-bottom: 1rem;
        text-align: center;
    }

    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 50%;
        margin: auto;

        .registerBtn{
            margin-bottom: 0.5rem;
            background: var(--blue);
            color: var(--white);
            border: none;

            &:hover{
                background: ${darken(0.05, '#D7232F')};
            }

        }
        
        
        button{
            padding: 0.8rem;
            border-style: none;
            border-radius: 8px;
            font-size: 0.8rem;
            border: solid 0.1px gray;
            margin: auto;
            width: 100%;
            margin-bottom: 2rem;


            &:hover{
                background: ${darken(0.05, 'white')};
            }
        }
    }
`