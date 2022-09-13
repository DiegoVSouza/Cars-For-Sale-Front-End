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

interface ContactModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

type Inputs = {
  email: string,
  name: string,
  phone: string,
  proposalAmount: number,

};

const schema = yup.object({
  email: yup.string().email('Informe um email valido').required('Informe um email valido'),
  name: yup.string().required('Informe seu Nome'),
  phone: yup.number().typeError('Por favor informe o seu numero de telefone').required('Por favor informe o seu numero de telefone'),
  proposalAmount: yup.number().typeError('Por favor informe sua proposta').required('Por favor informe sua proposta'),
}).required();

export const ContactModal = ({
  isOpen,
  onRequestClose
}: ContactModalProps) => {
  const { data: user } = useSelector((state: ApplicationState) => state.tokens);

  const { register, handleSubmit, formState: { errors }, } = useForm<Inputs>({
    resolver: yupResolver(schema)
  });

  const onSubmit: SubmitHandler<Inputs> = async data => {
    const dataProposal = { ...data, phone: data.phone.replace(/[^0-9]/g, "") }
    console.log(dataProposal)
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

          <label>Email</label>
          <input
            type='text'
            defaultValue={user.user.email}

            {...register("email")}
          />
          <p>{errors.email?.message}</p>

          <label>Telefone</label>
          <input
            type='string'
            onInput={(e) => e.currentTarget.value = formatPhone(e.currentTarget.value)}
            {...register("phone")}
          />
          <p>{errors.phone?.message}</p>
          <label>Proposta</label>

          <CurrencyInput intlConfig={{ locale: 'pt-BR', currency: 'BRL' }} {...register("proposalAmount")} />
          <p>{errors.phone?.message}</p>
          <input type="submit" value="Mandar Proposta"

          />
        </form>
      </Container>
    </Modal>
  );
}