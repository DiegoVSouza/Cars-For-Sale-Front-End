import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { updateCar } from "../../store/ducks/ids/actions";
import { formatPrice } from "../../util/formats/formatPrice";
import { Card, Cars, Container } from "./styles";

interface image {
  path: string
  car_id: string
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
  images: image;
}
interface CarsFormatted extends Car {
  priceFormatted: string;
}

interface productProps {
  category_id: string;
}

interface category {
  id: string
  name: string
  description: string
}

const Product: React.FC<productProps> = ({ category_id }) => {
  const dispactch = useDispatch();
  const history = useNavigate()
  const [cars, setCars] = useState<CarsFormatted[]>([])
  const [category, setCategory] = useState<category>({
    id: "",
  name: "teste",
  description: ""
  })
  useEffect(() => {
    async function loadProducts() {
      const { data: cars } = await api.get(`/cars/available?category_id=${category_id}`)
      const { data: categories } = await api.get<category[]>(`/categories`)
      const category = categories.find((category) => category.id === category_id)
      setCategory(category as category)
      
      const carsFormatted = cars.map(function (car: Car) {
      const category = categories.find((category) => category.id === car.category_id)

        return {
          ...car, price: new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(car.price),
          category: category?.name
        }
      })
      setCars(carsFormatted)
    }

    loadProducts();
  }, []);

  const name = category.name[0].toUpperCase() + category.name.substring(1);;
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
              <img src={"http://pngimg.com/uploads/volkswagen/volkswagen_PNG1821.png"} alt="Imagem do Carro" />
              <label>{car.name}</label>
              <label>{car.brand}</label>
              <label>{car.category}</label>
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