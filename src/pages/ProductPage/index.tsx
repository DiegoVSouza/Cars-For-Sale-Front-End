import React, { useEffect, useState } from 'react';

import { Container, Content, ProductSection } from './styles';

import { ContactModal } from '../../components/ContactModal';
import { AiFillCalendar, AiFillCar } from 'react-icons/ai';
import { MdCategory } from 'react-icons/md';
import { GiTrade } from "react-icons/gi";
import { RiPinDistanceFill } from "react-icons/ri";
import { IoColorPaletteSharp } from "react-icons/io5";
import { api } from '../../services/api';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../store';

interface category {
  id: string
  name: string
  description: string
}
interface image {
  image_name: string
}
interface Car {
  id: string;
  name: string;
  description: string;
  price: number;
  license_plate: string;
  brand: string;
  category_id: string;
  category: string;
  images: image[];
}
const ProductPage = (): JSX.Element => {

  const { carId } = useSelector(
    (state: ApplicationState) => state.ids
  );
  const [isOpen, setIsOpen] = useState(false)
  const [car, setCar] = useState({} as Car)
  const [idx, setIdx] = useState(0)


  useEffect(() => {
    async function loadCar() {
      const { data: car } = await api.get(`/cars/available?id${carId}`)

      const { data: categories } = await api.get<category[]>(`/categories`)
      const { data: images } = await api.get(`/cars/images?car_id=${car.id}`)
      const category = categories.find((category) => category.id === car.category_id)

      const carsFormatted = {
        ...car,
        price: new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(car.price),
        image: images,
        category: category?.name
      };


      setCar(carsFormatted)
    }

    loadCar()

  }, [])

  function handleOpenContactModal() {
    setIsOpen(true)
  }
  function handleCloseContactModal() {
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
              <label>Linha:</label><span>{car.name}</span>
            </div>
            <div>
              <MdCategory />
              <label>Categoria:</label><span>{car.category}</span>
            </div>
            <div>
              <AiFillCalendar />
              <label>Marca:</label> <span>{car.brand}</span>
            </div>
            <div>
              <GiTrade />
              <label>Descrição: </label><span>{car.description}</span>
            </div>
            <div>
              <RiPinDistanceFill />
              <label>Placa: </label><span>{car.license_plate}</span>
            </div>
            <div>
            </div>
            <button type='button' onClick={handleOpenContactModal}>Contatar Anunciante</button>
          </section>


          <section>
            <button onClick={() => setIdx(idx - 1)}>{"<-"}</button>
            <img src={car.images[idx].image_name} alt="" />
            <button onClick={() => setIdx(idx + 1)}>{"->"}</button>
          </section>
        </ProductSection>

      </Content>
      <ContactModal isOpen={isOpen} onRequestClose={handleCloseContactModal} />


    </Container>
  );
};

export default ProductPage;
