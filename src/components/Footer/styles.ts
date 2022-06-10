import styled from 'styled-components';
import { darken } from 'polished';


export const Container = styled.footer`
    background: ${darken(0.9, '#151418')};
    color: var(--white);

    div{
        max-width: 1120px;
        padding: 1rem 2rem;
        display: flex;
        justify-content: center;
        margin: auto;
        justify-content: space-evenly;
        section{
            display: flex;
            justify-content: space-evenly;
            svg{
                fill: var(--white);
                width: 32px;
                height: 32px;
            }
        }
    }
    
`