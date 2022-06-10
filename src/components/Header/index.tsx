import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { FiSearch, FiUser, FiX } from 'react-icons/fi';


import { Container, Content, LogIn, LogOut } from './styles';

import { useLogin } from '../../hooks/useLogin';

import ProfileImg from '../../assets/images/ProfileImg.svg' 
import LogoImg from '../../assets/images/logo.svg'
import SearchIpunt from '../SearchInput';

interface headerProps{
  product: string;
}

const Header = (): JSX.Element => {

  
  const [category, setCategory] = useState('')

  const [text, setText] = useState('');

  const [overlayIsOpen, setOverlayIsOpen] = useState(false)
  const [overlayOpen, setOverlayOpen] = useState({})
  const [overlayClose, setOverlayClose] = useState({})

  const [searchBar, setSearchBar] = useState('close')
  const [disabled, setdisabled] = useState(true)

  const { isLogged, LoggoutAccount, currentUser } = useLogin()


  
  useEffect(()=>{
    function overLay(){
      if(overlayIsOpen){
        setOverlayClose({
          display: 'inline-block'
        })
        setOverlayOpen({
          display: 'flex'
        })
      }
      else{
        setOverlayClose({
          display: 'none'
        })
        setOverlayOpen({
          display: 'none'
        })
      }
    }
    
    overLay()
  },[overlayIsOpen])

  useEffect(()=>{
    function disableSearch(){
      if(searchBar === 'open'){
        
        setdisabled(false)
      }
      else{
        setdisabled(true)
        setText('')
      }
    }
    
    disableSearch()
  },[searchBar])
  

  function searchIcon(){
    if(searchBar === 'open'){
      
      return <FiX className={searchBar} onClick={()=>setSearchBar('close')}/>
    }else{
      
      return <FiSearch className={searchBar} onClick={()=>setSearchBar('open')}/>
    }
  }

  
  

  function Guest(){
    return(
      <LogIn>
      <FiUser size={32} color='#ffffff' onClick={()=>setOverlayIsOpen(true)}/>
        <div style={overlayOpen}>
            <Link to='/login'><button id='singInButton'>Entrar</button></Link>
            <Link to='/createaccount'><button>Criar Conta</button></Link>
        </div>
      </LogIn>
    )
  }
  function User(){
    return(
      <LogOut>
      <div>
        <button className='logout' onClick={() => LoggoutAccount()}>Bem vindo {currentUser.name}
        <FiX /></button>
      </div>
      </LogOut>
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
      <div style={overlayClose} onClick={()=>setOverlayIsOpen(false)}></div>
      <Content>
        <Link to="/"><img src={LogoImg} alt="Imagem da Logo" /></Link>
          
            <nav>
              <a className={ window.location.pathname === '/' ? 'active' : ''} href='/'>Comprar</a>
              <a className={ window.location.pathname === '/mycars' ? 'active' : ''} href='/mycars'>Vender</a>
            </nav>
            <div>
              {searchIcon()} 
              <input className={searchBar} type="text" disabled={disabled} value={text} onChange={(e) => setText(e.target.value)} 
              placeholder='Oque você está procurando?'/>
              <SearchIpunt text={text} category={category}/>
            </div>
          
            {Account()}
            
        </Content>
    </Container>
  );
};

export default Header;


