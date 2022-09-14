import { FormEvent, useState } from 'react';
import Modal from 'react-modal'

import { Container } from './styles';
import { SubmitHandler, useForm } from 'react-hook-form';


import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import { formatPhone } from '../../util/formats/formatPhone';
import { formatPrice } from '../../util/formats/formatPrice';
import CurrencyInput from 'react-currency-input-field';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../store';
import { api } from '../../services/api';

interface ContactModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

type Inputs = {
  name: string,
  description: string,

};

const schema = yup.object({
  name: yup.string().required('Informe o nome da categoria'),
  description: yup.number().typeError('Por favor informe a descrição').required('Por favor informe a descrição'),
}).required();

export const CategoryModal = ({
  isOpen,
  onRequestClose
}: ContactModalProps) => {
  const { data: user } = useSelector((state: ApplicationState) => state.tokens);

  const { register, handleSubmit, formState: { errors }, } = useForm<Inputs>({
    resolver: yupResolver(schema)
  });

  const onSubmit: SubmitHandler<Inputs> = async data => {
    await api.post("/categories", data, {
      headers: {
        'authorization': `Basic ${user.refresh_token}`
      },

    })
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
            defaultValue={user.user.name}
            {...register("name")}
          />
          <p>{errors.name?.message}</p>
          <label>Descrição</label>
          <input
            type='text'
            defaultValue={user.user.name}
            {...register("description")}
          />
          <p>{errors.description?.message}</p>



        </form>
      </Container>
    </Modal>
  );
}