import React from 'react';
import { Link } from 'react-router-dom';
import { IoPersonCircle } from 'react-icons/io5';


import { Container } from './styles';

import { useLogin } from '../../hooks/useLogin';

import ProfileImg from '../../assets/images/ProfileImg.svg' 
import LogoImg from '../../assets/images/logo.svg'

const Header = (): JSX.Element => {

  const { isLogged } = useLogin()

  function Guest(){
    return(
      <div className='account'>
        
        <div>
          <Link to='/login'><strong>Entrar</strong></Link>
          <Link to='/createaccount'><label>Criar Conta</label></Link>
        </div>
        <Link to='/login'>
          <IoPersonCircle size={36} color='#101010'/>
        </Link>
      </div>
    )
  }
  function User(){
    return(
      <div className='account'>
        <strong>Bem vindo</strong>
        <img src={ProfileImg} alt="Imagem de Perfil" />
      </div>
    )
  }

  function Account(){
    if(!isLogged){
      return <Guest/>
    }
      
    return <User/>
  }

  return (
    <Container>
      <article>
        <img src={LogoImg} alt="" />
          <div>
            <ul>
              <Link to={'/'}><li>Comprar</li></Link>
              <Link to={'/'}><li>Vender</li></Link>
            </ul>
          </div>

          {Account()}

        </article>
    </Container>
  );
};

export default Header;
