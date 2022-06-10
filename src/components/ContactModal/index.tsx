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
    phone: yup.number().typeError('Por favor informe o seu numero de telefone').required('Por favor informe o seu numero de telefone'),
}).required();

export const ContactModal = ({
  isOpen,
  onRequestClose
}: ContactModalProps) => {


  const { register, handleSubmit, formState: { errors }, } = useForm<Inputs>({
    resolver: yupResolver(schema)
  });

  const onSubmit: SubmitHandler<Inputs> = async data => {
    console.log(data);
    onRequestClose()
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
                        <label>Nome</label>
                        <input
                            type='text'
                            {...register("name")}
                        />
                        <p>{errors.name?.message}</p>
                        
                        <label>Email</label>
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
                        
                        />
                    </form>
        </Container>
    </Modal>
  );
}