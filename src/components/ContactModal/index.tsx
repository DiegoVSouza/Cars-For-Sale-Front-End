import { FormEvent, useState } from 'react';
import Modal from 'react-modal' 

import { Container } from './styles';
import { SubmitHandler, useForm } from 'react-hook-form';


import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'

interface ContactModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

type Inputs = {
    email: string,
    name: string,
    phone: number,

  };

  const schema = yup.object({
    email: yup.string().email('Informe um email valido').required('Informe um email valido'),
    name: yup.string().required('Informe seu Nome'),
    phone: yup.number().required('Por favor informe o seu numero de telefone'),
}).required();

export const ContactModal = ({
  isOpen,
  onRequestClose
}: ContactModalProps) => {


  const { register, handleSubmit, formState: { errors }, } = useForm<Inputs>({
    resolver: yupResolver(schema)
  });

  const onSubmit: SubmitHandler<Inputs> = async data => {
    window.location.href ="mailto:dvsdiegovieira@gmail.com?subject=Um Comprador se Interessou pelo seu Anuncio&amp;body=Olá,%0D%0A%0D%0A[corpo do email]%0D%0A%0D%0AAtenciosamente,%0D%0A[nome do usuário]"
  };



  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <form onSubmit={handleSubmit(onSubmit)} >
                        <label>Email</label>
                        <input
                            type='text'
                            {...register("name")}
                        />
                        <p>{errors.name?.message}</p>
                        
                        <label>Senha</label>
                            <input
                            type='text'

                            {...register("email")}
                            />
                        <p>{errors.email?.message}</p>

                        <label>Telefone</label>
                            <input
                            type='number'

                            {...register("phone")}
                            />
                        <p>{errors.phone?.message}</p>
                        <input type="submit" value="Entrar" 
                        className="react-modal-close"
                        onClick={onRequestClose}/>
                    </form>
        </Container>
    </Modal>
  );
}