import styled from 'styled-components';
import { darken } from 'polished';


export const Container = styled.footer`
    background: ${darken(0.9, '#151418')};
    color: var(--white);
    position: absolute;
    bottom: -10rem;
    width: 100%;

    div{
        max-width: 1120px;
        padding: 1rem 2rem;
        display: flex;
        justify-content: center;
        margin: auto;
        justify-content: space-evenly;
        p{
            margin: 0 0.5rem;
        }
        section{
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            svg{
                fill: var(--white);
                width: 32px;
                height: 32px;
            }
        }
    }
    
`