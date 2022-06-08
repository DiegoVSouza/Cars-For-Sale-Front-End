import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import { formatPrice } from "../../util/format";
import { Card, Cars, Container } from "./styles";

interface Cars{
  id: number;
  name: string;
  collection: string;
  year: number;
  image: string;
  price: number;
  category: string;
  }

interface CarsFormatted extends Cars{
    priceFormatted: string;
}

interface productProps{
    product: string;
}

const Product: React.FC<productProps> = ({product})=>{

    const [cars, setCars] = useState<CarsFormatted[]>([])

  useEffect(() => {
    async function loadProducts() {
      const {data: cars} = await api.get(`cars?category=json-server&category=${product}`)
      const carsFormatted = cars.map(function (car: Cars) {
        return { ...car, price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(car.price ) }
      })
      setCars(carsFormatted)
    }

    loadProducts();
  }, []);

  const name = product[0].toUpperCase() + product.substring(1);;
  

    return(
        <Container>
            <Card>
              <h1>{name}</h1>
                <Cars>
                    {cars.map(car =>(
                        <li key={car.id}>
                            <img src={car.image} alt="Imagem do Carro" />
                            <label>{car.name}</label>
                            <label>{car.collection}</label>
                            <label>{car.year}</label>
                            <strong>{car.price}</strong>
                            <Link to='/productpage'><button>Compre agora</button></Link>
                        </li>
                    ))}
                </Cars>
            </Card>
            
        </Container>
    )
}

export default Product;