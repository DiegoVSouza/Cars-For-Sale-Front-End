import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Card = styled.main`
    width: 30%;
    height: 100%;
    background: white;
    border-radius: 10px;

    margin-top: 2rem;

    box-shadow: 0 0 10px 5px ${darken(0.1, '#474747')};
    
`

export const Form = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    h2{
        font-size: 1.5rem;
        padding: 1rem 0 0.5rem;
        font-weight: bold;
    }
    p{
            color: red;
            font-size: 0.75rem;
            margin: 2px;
        }

    img{
        width: 4rem;
        margin-top: 3rem;
    }
    

    
    form{
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 0 1rem 1rem;
        border-radius: 30px;
        width: 90%;
        
        label{
            color: var(--black);
            font-weight: bold;
            margin-bottom: 0.5rem;

            &:last-of-type{
                align-self: center;
                color: black;
                margin-top: 1rem;
                font-size: 0.75rem;
                a{
                    color: black
                }
            }
        }

        div{
            position: relative;
            input{
                width: 88%;
                border-radius: 8px 0 0 8px ;
            }
            div{
                position: absolute;
                right: 0;
                height:100%;
                width: 12%;
                border-radius: 0 8px 8px 0 ;
                border-style: none;
                border: solid 0.5px gray;
                display: flex;
                align-items: center;
                justify-content: center;
                
                svg{

                }
            }
            
        }
        input{
            border-radius: 8px;
            border-style: none;
            padding: 0.5rem 1rem;
            transition: all 200ms;
            border: solid 0.5px gray;
            width: 100%;

            &:hover{
                background: ${darken(0.1,'white')};
            }           

            &[type=submit]{
                color: var(--white);
                background: var(--blue);
                width: 100%;
                align-self: center;
                padding: 0.75rem;
                border-style: none;
                border-radius: 8px;
                font-size: 0.75rem;
            }
            &[type=submit]:hover{
                background: ${darken(0.05, '#625ffa')};

            }
            & + label{
                margin-top: 2rem;
            }
        }
    }
`

export const LinkAccounts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1rem;

    div{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        hr{
        display: inline-block;
        width: 40%;
        margin: 0 5px;
        }
        label{
            font-size: 0.75rem;
            color: var(--gray);
        }
    }

    section{
        display: flex;
        justify-content: space-between;
        width:90%;

        img{
        width: 9rem;
        margin-top: 1rem;
        &:hover{
            filter: brightness(0.8)
        }
    }
    }

    footer{
        font-size: 0.75rem;
        color: black;
        margin-top: 1rem;
        margin-bottom: 1rem;
            a{  
                color: black;
            }
    }
    
    
`

