import { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';
import LogoImg from '../../assets/images/logo.svg'
import BtnGoogleImg from '../../assets/images/BTNGoogle.svg'
import BtnFacebookImg from '../../assets/images/BTNFacebook.svg'

import { Card, Container, Form, LinkAccounts } from './styles';
import { Link } from 'react-router-dom';

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import { useForm, SubmitHandler  } from 'react-hook-form';

import { Account } from '../../types';
import { api } from '../../services/api';

type Inputs = {
    email: string,
    password: string,
  };


const LoginPage = (): JSX.Element=>{

    const  [errorFild, setErrorFild] = useState(()=>{
        return <></>
    })


    const {LoginAccount} = useLogin() 

    const { register, handleSubmit, watch, formState: { errors }, reset, } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async data => {

        const {data: accounts} = await api.get<Account[]>('/accounts')
        const currentEmail = accounts.find(account=> account.email === data.email)
        
        if(currentEmail){
            const currentId = currentEmail.id
            setFormStyleEmail({border: 'solid 0.5px gray'})

            if(currentEmail.password === data.password){
                seFtormStylePassword({border: 'solid 0.5px gray'})
                LoginAccount(currentId)
                return

            }else{
                seFtormStylePassword({border: 'solid 0.5px red'})
                setErrorFild(<p>Senha incorreta</p>)
                return
            }
            
        }else{
            setFormStyleEmail({border: 'solid 0.5px red'})
            setErrorFild(<p>Endereço de email não encontrado</p>)
            return
        }
      };

      const [formStyleEmail, setFormStyleEmail] = useState(()=>{
          return(
            {
                border: 'solid 0.5px gray'
            }
          )
      })

      const [formStylePassword, seFtormStylePassword] = useState(()=>{
        return(
          {
              border: 'solid 0.5px gray'
          }
        )
    })


           
    const [showPassword, setShowPassword] = useState('password')

    const [visible, setVisible] = useState(true)

    function visibleIcon(){
        if(visible){
            return <AiOutlineEye size={24} color='#000000'/>
            
        }else{
            return <AiOutlineEyeInvisible size={24} color='#000000'/>
        }        
    }

    function showPassord(){
        if(showPassword === 'password'){
            setShowPassword('text')
            setVisible(false)
        }else{
            setShowPassword('password')
            setVisible(true)
        }
    }

    return(
        <Container>
            <Card>
                <Form>
                    <img src={LogoImg} alt="Logo" />
                    <h2>Entrar</h2>

                    {errorFild}

                    <form onSubmit={handleSubmit(onSubmit)} >
                        <label>Email</label>
                        <input
                            style={formStyleEmail}
                            id="email"
                            {...register("email", {
                            required: "Insira seu email",
                
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "Adicione um endereço de email valido"
                            }
                            })}
                            type="email"
                        />
                        {errors.email && <p>{errors.email.message}</p>}
                        
                        <label>Senha</label>
                        <div>
                            <div onClick={showPassord}>
                                {visibleIcon()} 
                            </div>
                            <input
                                style={formStylePassword}
                                id="password"
                                    {...register("password", {
                                    required: "Insira sua senha",
                                    minLength: {
                                        value: 5,
                                        message: "A senha deve ter no minino 5 caracteres"
                                    },
                                    })}
                                    type={showPassword}
                                />
                        </div>
                        {errors.password && <p>{errors.password.message}</p>}

                        <label className='fogotPassword'> <Link to={'/'}>Esqueci minha senha </Link> </label>
                        <input type="submit" value="Entrar" />
                    </form>
                </Form>
                <LinkAccounts>
                    <div>
                        <hr/>
                        <label> Ou entre </label>
                        <hr/>
                    </div>
                    <section>
                        <Link to={'/'}><img src={BtnGoogleImg} alt="" /></Link>
                        <Link to={'/'}><img src={BtnFacebookImg} alt="" /></Link>
                    </section>
                    
                    <footer>Não é registrado? <Link to={'createaccount'}>Crie uma conta</Link></footer>
                </LinkAccounts>
            </Card>
        </Container>
    )

}

export default LoginPage;