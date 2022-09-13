import { useEffect, useState } from 'react';
import LogoImg from '../../assets/images/logo.svg'
import BtnGoogleImg from '../../assets/images/BTNGoogle.svg'
import BtnFacebookImg from '../../assets/images/BTNFacebook.svg'

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'

import { Card, Container, Form, LinkAccounts } from './styles';
import { Link, useNavigate } from 'react-router-dom';

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import { useForm, SubmitHandler } from 'react-hook-form';

import { Account } from '../../types';
import { api } from '../../services/api';
import { ApplicationState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { loadSession, loadSessionFailure } from '../../store/ducks/tokens/actions';
import { loadRequest } from '../../store/ducks/cars/actions';

type Inputs = {
    email: string,
    password: string,
};

const schema = yup.object({
    email: yup.string().email('Informe um email valido').required('Informe um email valido'),
    password: yup.string().min(3, 'a senha deve conter 8 caracteres').required('a'),
}).required();


const LoginPage = (): JSX.Element => {
    const { error, data: user } = useSelector((state: ApplicationState) => state.tokens);
    const [handleError, setHandleError] = useState(false)
    const dispactch = useDispatch();
    const history = useNavigate();
    useEffect(() => {
        console.log(user)

        if (user.logged) {
            history('/')
            seFtormStylePassword({ border: 'solid 0.5px gray' })
            setFormStyleEmail({ border: 'solid 0.5px gray' })

        } else {
            seFtormStylePassword({ border: 'solid 0.5px red' })
            setFormStyleEmail({ border: 'solid 0.5px red' })
            setErrorFild(<p>Endereço de email não encontrado</p>)
            setErrorFild(<p>Senha incorreta</p>)

        }
    }, [error, user])
    const [errorFild, setErrorFild] = useState(() => {
        return <></>
    })
    const [formStyleEmail, setFormStyleEmail] = useState(() => {
        return (
            {
                border: 'solid 0.5px gray'
            }
        )
    })
    const [formStylePassword, seFtormStylePassword] = useState(() => {
        return (
            {
                border: 'solid 0.5px gray'
            }
        )
    })


    const { register, handleSubmit, formState: { errors }, } = useForm<Inputs>({
        resolver: yupResolver(schema)
    });


    const onSubmit: SubmitHandler<Inputs> = async data => {
        dispactch(loadSession(data))
    };

    const [showPassword, setShowPassword] = useState('password')

    const [visible, setVisible] = useState(true)

    function visibleIcon() {
        if (visible) {
            return <AiOutlineEye size={24} color='#000000' />

        } else {
            return <AiOutlineEyeInvisible size={24} color='#000000' />
        }
    }

    function showPassord() {
        if (showPassword === 'password') {
            setShowPassword('text')
            setVisible(false)
        } else {
            setShowPassword('password')
            setVisible(true)
        }
    }

    function setDefaultEmail() {
        setErrorFild(<></>)
        setFormStyleEmail({ border: 'solid 0.5px gray' })
    }

    function setDefaultPassword() {
        setErrorFild(<></>)
        seFtormStylePassword({ border: 'solid 0.5px gray' })
    }
    return (
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
                            {...register("email")}
                            onChange={setDefaultEmail}
                        />
                        <p>{errors.email?.message}</p>

                        <label>Senha</label>
                        <div>
                            <div onClick={showPassord}>
                                {visibleIcon()}
                            </div>
                            <input
                                style={formStylePassword}
                                type={showPassword}
                                {...register("password")}
                                onChange={setDefaultPassword}
                            />
                        </div>
                        <p>{errors.password?.message}</p>

                        <label className='fogotPassword'> <Link to={'/'}>Esqueci minha senha </Link> </label>
                        <input type="submit" value="Entrar" />
                    </form>
                </Form>
                {/* <LinkAccounts>
                    <div>
                        <hr />
                        <label> Ou entre </label>
                        <hr />
                    </div>
                    <section>
                        <Link to={'/'}><img src={BtnGoogleImg} alt="" /></Link>
                        <Link to={'/'}><img src={BtnFacebookImg} alt="" /></Link>
                    </section>

                    <footer><span>Não é registrado?</span> <Link to='/createaccount'>Crie uma conta</Link></footer>
                </LinkAccounts> */}
            </Card>
        </Container>
    )

}

export default LoginPage;