import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { updateCar } from "../../store/ducks/ids/actions";
import { formatPrice } from "../../util/formats/formatPrice";
import { Card, Cars, Container } from "./styles";

interface Cars {
  id: string;
  name: string;
  collection: string;
  year: number;
  image: string;
  price: number;
  category: string;
  plate: string
}

interface CarsFormatted extends Cars {
  priceFormatted: string;
}

interface productProps {
  product: string;
}

const Product: React.FC<productProps> = ({ product }) => {
  const dispactch = useDispatch();
  const history = useNavigate()
  const [cars, setCars] = useState<CarsFormatted[]>([])

  useEffect(() => {
    async function loadProducts() {
      const { data: cars } = await api.get(`/cars/available?category_id=${product}`)
      const carsFormatted = cars.map(function (car: Cars) {
        return {
          ...car, price: new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(car.price)
        }
      })
      setCars(carsFormatted)
    }

    loadProducts();
  }, []);

  const name = product[0].toUpperCase() + product.substring(1);;
  const goToProductPage = (carId: string) => {
    dispactch(updateCar(carId))
    history('/productpage')
  }
  return (
    <Container>
      <Card>
        <h1>{name}</h1>
        <Cars>
          {cars.map(car => (
            <li key={car.id}>
              <img src={car.image} alt="Imagem do Carro" />
              <label>{car.name}</label>
              <label>{car.collection}</label>
              <label>{car.year}</label>
              <strong>{car.price}</strong>
              <button onClick={() => goToProductPage(car.id)}>Compre agora</button>
            </li>
          ))}
        </Cars>
      </Card>

    </Container>
  )
}

export default Product;