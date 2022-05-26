import React, { useState, useEffect } from 'react';

import { Container } from './styles';

import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";

import { api } from '../../services/api';
import { useCart } from '../../hooks/useCart';
import { Link } from 'react-router-dom';

import Header from '../../components/Header'
import DashBoard from '../../components/DashBoard'

import ProfileImg from '../../assets/images/ProfileImg.svg' 
import LogoImg from '../../assets/images/logo.svg'


interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface ProductFormatted extends Product {
  priceFormatted: string;
}

interface CartItemsAmount {
  [key: number]: number;
}

const Home = (): JSX.Element => {

  const {addProduct,cart} = useCart()

  // useEffect(() => {
  //   async function loadProducts() {
  //     const banners = await api.get('banners')
  //     setBanners(banners.data)
  //     const point = document.querySelectorAll('.points li')
  //     point[idx].classList.add('on')
  //   }

  //   loadProducts();
  // }, []);
  

  return (
    <Container>
      <Header/>

        <DashBoard/>

    </Container>
  );
};

export default Home;
