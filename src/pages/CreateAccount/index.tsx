import { useEffect, useState } from 'react';

import { api } from '../../services/api';
import { Account } from '../../types';
import { Card, Container, Form, LinkAccounts } from './styles';

import { Link, useNavigate } from 'react-router-dom';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'

import LogoImg from '../../assets/images/logo.svg'
import BtnGoogleImg from '../../assets/images/BTNGoogle.svg'
import BtnFacebookImg from '../../assets/images/BTNFacebook.svg'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loadSession } from '../../store/ducks/tokens/actions';



type Inputs = {
    name: string;
    email: string,
    password: string,
    driver_license: string,
    confirmPassword: string,
};


const schema = yup.object({
    name: yup.string().required('Informe seu nome'),
    email: yup.string().email('Informe um email valido').required('Informe um email valido'),
    driver_license: yup.string().required('Informe uma CNH valida'),
    password: yup.string().min(8, 'a senha deve conter 8 caracteres').required('Digite uma senha'),
    confirmPassword: yup.string().required('Digite sua senha novamente').oneOf([yup.ref("password")], 'As senhas devem ser iguais')
}).required();

const CreateAccount = (): JSX.Element => {
    const dispactch = useDispatch();

    const history = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
        resolver: yupResolver(schema)
    });


    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const user = { name: data.name, email: data.email, password: data.password, driver_license: data.driver_license }
        await api.post('/users', user).then(({ data }) => {
            dispactch(loadSession(user))

        }).catch(({ error }) => {
            alert("Error ao cadastrar")
        })
        history('/login')
    };


    const [showPassword, setShowPassword] = useState('password')

    const [visible, setVisible] = useState(true)

    function visibleIcon() {
        if (visible) {
            return (
                <AiOutlineEye size={24} color='#000000' />
            )
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




    return (
        <Container>
            <Card>
                <Form>
                    <img src={LogoImg} alt="Logo" />
                    <h2>Cadastre-se</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label>Seu nome</label>
                        <input type='text' {...register("name")} />
                        <p>{errors.name?.message}</p>

                        <label>E-mail</label>
                        <input type='text' {...register("email")} />
                        <p>{errors.email?.message}</p>
                        <label>CNH</label>
                        <input type='text' {...register("driver_license")} />
                        <p>{errors.driver_license?.message}</p>

                        <label>Senha</label>
                        <div>
                            <div onClick={showPassord}>
                                {visibleIcon()}
                            </div>
                            <input type={showPassword} {...register("password")} />
                        </div>
                        <p>{errors.password?.message}</p>
                        <label>Confirmar Senha</label>
                        <div>
                            <div onClick={showPassord}>
                                {visibleIcon()}
                            </div>
                            <input type={showPassword} {...register("confirmPassword")} />
                        </div>
                        <p>{errors.confirmPassword?.message}</p>

                        <input type="submit" value="Criar Conta" />
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

                    <footer><span>Já é registrado?</span> <Link to={'/login'}>Ir para Login</Link></footer>
                </LinkAccounts> */}
            </Card>
        </Container>
    )

}

export default CreateAccount;