import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Card, Cars, Container } from './styles';

import { formatPrice } from '../../util/format';
import { Link } from 'react-router-dom';

// import { Cars } from '../../types';

interface Cars{
    id: number;
    title: string;
    image: string;
    price: number;
    amount: number;
  }

interface CarsFormatted extends Cars{
    priceFormatted: string;
}

const DashBoard = (): JSX.Element=>{

    const [cars, setCars] = useState<CarsFormatted[]>([])

  useEffect(() => {
    async function loadProducts() {
      const {data: cars} = await api.get('cars')
      const carsFormatted = cars.map(function (car: Cars) {
        return { ...car, price: formatPrice(car.price) }
      })
      setCars(carsFormatted)
    }

    loadProducts();
  }, []);

    return(
        <Container>
            <Card>
                <Cars>
                    {cars.map(car =>(
                        <li key={car.id}>
                            <img src={car.image} alt="Imagem do Carro" />
                            <strong>{car.title}</strong>
                            <label>{car.price}</label>
                            <Link to='/home'><button>Compre agora</button></Link>
                        </li>
                    ))}
                </Cars>
            </Card>
            
        </Container>
    )
}

export default DashBoard;