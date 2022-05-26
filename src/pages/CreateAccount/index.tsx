import { useEffect, useState } from 'react';

import { api } from '../../services/api';
import { Account } from '../../types';
import { Card, Container, Form, LinkAccounts } from './styles';

import { Link, useHistory } from 'react-router-dom';

import LogoImg from '../../assets/images/logo.svg'
import BtnGoogleImg from '../../assets/images/BTNGoogle.svg'
import BtnFacebookImg from '../../assets/images/BTNFacebook.svg'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useForm, SubmitHandler  } from 'react-hook-form';
import { ErrorMessage } from "@hookform/error-message";


type Inputs = {
    email: string,
    password: string,
    confirmPassword: string,
  };

const CreateAccount = (): JSX.Element=>{

    const history = useHistory()
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [id, setId] = useState(0)
    const [formStyle, setFormStyle] = useState({})

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

    useEffect(()=>{
         function changeId(){
            const newId = Math.round(Date.now()*Math.random())
            setId(newId)
        }
        changeId()
    },[])
    
    const onSubmit: SubmitHandler<Inputs> = data => {
            
            api.post<Account>('accounts',{id:id,email: data.email, password: data.password})
            
            concluded()
    };
    

    const [showPassword, setShowPassword] = useState('password')

    const [visible, setVisible] = useState(true)

    function concluded(){
        history.push('/login')
    }

    function visibleIcon(){
        if(visible){
            return(
                <AiOutlineEye size={24} color='#000000'/>
            )
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
                    <h2>Cadastre-se</h2>
                    <form onSubmit = { handleSubmit(onSubmit) }>
                        <label>E-mail</label>

                        <input style={formStyle} {...register("email", { required: "Digite seu email", 
                            validate: async value =>{
                                const {data:accounts} = await api.get<Account[]>('accounts')
                                const find = accounts.find(account => account.email === value)
                                if(find){
                                    return "Email já cadastrado"
                                }
                            },
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "Adicione um endereço de email valido"
                            }
                        } )} />
                        {errors.email && <p>{errors.email.message}</p>}

                        <label>Senha</label>
                        <div>
                            <div onClick={showPassord}>
                                {visibleIcon()}
                            </div>
                            <input type={showPassword} {...register("password", { required: "Defina a senha",
                            minLength: {
                            value: 8,
                            message: "A senha precisa de no minimo 8 caracteres"
                          } })} />
                        </div>
                        {errors.password && <p>{errors.password.message}</p>}
                        <label>Confirmar Senha</label>
                        <div>
                            <div onClick={showPassord}>
                                {visibleIcon()}
                            </div>
                            <input type={showPassword} {...register("confirmPassword", { required: "Digite sua senha novamente" ,
                                       validate: (value: string) => {
                                           if(watch('password') != value){
                                               return "As senhas devem ser iguais"
                                           }
                                       }
                             })} />
                        </div>
                        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
                             
                        <input type="submit" value="Criar Conta" />
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
                
                <footer>Já é registrado? <Link to={'login'}>Ir para Login</Link></footer>
            </LinkAccounts>
            </Card>
        </Container>
    )

}

export default CreateAccount;