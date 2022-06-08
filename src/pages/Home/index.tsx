import React from 'react';

import { Container, Content } from './styles';


import Header from '../../components/Header'
import Product from '../../components/Products';
import { Cars } from '../../components/Products/styles';


import coverCarImg from '../../assets/images/cars/homeCover.png'

import { ReactComponent as VolkswagenIcon } from '../../assets/images/carIcons/volkswagenIcon.svg'
import { ReactComponent as HondaIcon } from '../../assets/images/carIcons/hondaIcon.svg'
import { ReactComponent as RenaultIcon } from '../../assets/images/carIcons/renaultIcon.svg'
import { ReactComponent as JeepIcon } from '../../assets/images/carIcons/jeepIcon.svg'



interface Cars{
  id: number;
  title: string;
  collection: string;
  year: number;
  image: string;
  price: number;
  amount: number;
  category: string;
  }

interface CarsFormatted extends Cars{
    priceFormatted: string;
}

const Home = (): JSX.Element => {


  return (
    <Container>
      <Header/>
      <Content>
        <div>
          <label>Bem vindo!👋</label>
          <h2>Encontre aqui seu proximo<br/></h2>
          <h1><span>parceiro</span> de viagens</h1>

          <div>
            <VolkswagenIcon/>
            <HondaIcon/>
            <RenaultIcon/>
            <JeepIcon/>
            
          </div>
        </div>

        <img src={coverCarImg} alt="cover Img" />
      </Content>
      
      <Product product='sedan'/>

    </Container>
  );
};

export default Home;
