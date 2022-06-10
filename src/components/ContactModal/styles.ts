import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.main`
    width: 100%;
    display: flex;
    color: var(--white);

    form{
        width: 100%;
    }

    p{
        color: red;
        font-size: 0.75rem;
        margin: 0.5rem 0 1rem;
    }
    label{
        /* padding: 2rem 0; */
        line-height: 2rem;
    }
    
    input{
        width: 100%;
        padding: 0.25rem 1rem 0.25rem 2rem;
      border-radius: 0.5rem;
      height: 2rem;
      transition: all 200ms;
      z-index: 1;
    }

    input[type=submit]{
        height: auto;
        cursor: pointer;
        background: var(--blue);
        font-size: 1rem;
        color: var(--white);
        padding: 0.75rem;
        margin-top: 1rem;
        border-style: none;
        border-radius: 10px;
        width: 100%;

        &:hover {
      filter: brightness(0.8);
    }

                    a{
                        color: var(--white);
                        text-decoration: none;  
                    }
  }
`