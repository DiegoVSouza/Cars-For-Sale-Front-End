import React, { useState } from 'react';

import { Container, Content, ProductSection } from './styles';

import { ContactModal } from '../../components/ContactModal';
import { AiFillCalendar, AiFillCar } from 'react-icons/ai';
import { MdCategory } from 'react-icons/md';
import { GiTrade } from "react-icons/gi";
import { RiPinDistanceFill } from "react-icons/ri";
import { IoColorPaletteSharp } from "react-icons/io5";



const ProductPage = (): JSX.Element => {


  const [isOpen, setIsOpen] =useState(false)


   function handleOpenContactModal(){
    setIsOpen(true)
  }
  function handleCloseContactModal(){
    setIsOpen(false)
  }

  return (
    <Container>
      <Content>
      <h1>Carro Tal</h1>
      <ProductSection>
          <section>
            <div>
              <AiFillCar />
              <label>Linha:</label><span>Linha Tal</span>
              </div>
              <div>
              <MdCategory />
              <label>Categoria:</label><span>Sedan</span>
              </div>
              <div>
              <AiFillCalendar />
              <label>Ano:</label> <span>2020</span>
              </div>
              <div>
              <GiTrade />
              <label>Aceita Troca: </label><span>Sim</span>
              </div>
              <div>
              <RiPinDistanceFill />
              <label>KM: </label><span>83.312</span>
              </div>
              <div>
              <IoColorPaletteSharp />
              <label>Cor: </label> <span>Branco</span>
              </div>
            <button type='button' onClick={handleOpenContactModal}>Contatar Anunciante</button>
          </section>
          
      
        <section>

          <img src='https://www.imagensempng.com.br/wp-content/uploads/2021/06/02-21.png' alt="" />

        </section>
        </ProductSection>

        </Content>
      <ContactModal isOpen={isOpen} onRequestClose={handleCloseContactModal}/>
      

    </Container>
  );
};

export default ProductPage;
