import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import { Card, Cars, Container } from "./styles";

interface image {
  image_name: string
}
interface category {
  id: string
  name: string
  description: string
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
  text: string;
  category: string;
}

const SearchIpunt: React.FC<productProps> = ({ text, category }) => {

  const [cars, setCars] = useState<CarsFormatted[]>([])
  const [onSearch, setOnSearch] = useState(false)
  const [filter, setFilter] = useState<CarsFormatted[]>([]);

  useEffect(() => {
    async function loadProducts() {
      if (text) {
        const { data: cars } = await api.get('/cars/available')
        const { data: categories } = await api.get<category[]>(`/categories`)

        const carsFormatted = cars.map(async (car: Car) => {
          const { data: images } = await api.get(`/cars/images?car_id=${car.id}`)
          const category = categories.find((category) => category.id === car.category_id)
          return {
            ...car,
            price: new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(car.price),
            image: images[0],
            category: category?.name
          };
        });
        setCars(carsFormatted)
      }

    }

    loadProducts();
  }, [onSearch]);

  useEffect(() => {
    if (text !== '') {

      if (!onSearch) {
        setOnSearch(true)
      }

    } else {
      setOnSearch(false)
    }

    if (cars.length === 0) return;

    const carslowercase = cars.filter(car => car.name.toLocaleLowerCase());

    const result = typeof text === 'string' ? text.toLocaleLowerCase() : '';

    const search = carslowercase.filter(car => car.name.includes(result))
    setFilter(search)
  }, [text])

  function SearchBar() {
    if (onSearch) {
      return (
        <Card>
          {text && !cars && <span>Carregando...</span>}
          {cars && (
            <Cars>
              {filter.map(car => {
                return (
                  <Link to='/productpage'> <li key={car.id}>
                    <img src={car.images.image_name} alt="Imagem do Carro" />
                    <div>
                      <label>{car.name}</label>
                      <label>{car.brand}</label>
                      <label>{car.category}</label>
                    </div>

                    <div>
                      <strong>{car.price}</strong>
                    </div>

                  </li>
                  </Link>
                );
              })}
            </Cars>


          )}
        </Card>
      )
    } else {
      return <></>
    }

  }
  return (
    <Container>
      <SearchBar />
    </Container>
  )
}

export default SearchIpunt;