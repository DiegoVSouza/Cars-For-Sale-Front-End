import React, { ChangeEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import { Card, Cars, Container } from "./styles";

interface Cars{
  id: number;
  name: string;
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

interface productProps{
    text: string;
    category: string;
}

const SearchIpunt: React.FC<productProps> = ({text, category})=>{

    const [cars, setCars] = useState<CarsFormatted[]>([])
    const [onSearch, setOnSearch] = useState(false)
    const [filter, setFilter] = useState<CarsFormatted[]>([]);
    
    useEffect(() => {
      async function loadProducts() {
        if(category === ''){
          const {data: cars} = await api.get('cars')
          const carsFormatted = cars.map(function (car: Cars) {
            return { ...car, price: car.price.toLocaleString('pt-BR') }
          })
          setCars(carsFormatted)
        }
        else{
          const {data: cars} = await api.get(`cars?category=json-server&category=${category}`)
          const carsFormatted = cars.map(function (car: Cars) {
            return { ...car, price: car.price.toLocaleString('pt-BR') }
          })
          setCars(carsFormatted)
        }      
      }
  
      loadProducts();
    }, []);
  
    useEffect(()=>{
      if(text !== ''){
        setOnSearch(true)
        
      }else{
        setOnSearch(false)
      }

      const search = cars.filter(car=> car.name.toLocaleLowerCase().includes(text.toLocaleLowerCase()))
        setFilter(search)
      },[text])
    
     function SearchBar(){
      if(onSearch){
        return(
          <Card>
            {text && !cars && <span>Carregando...</span>}
            {cars && (
              <Cars>
              {filter.map(car =>{
                return (
                  <Link to='/productpage'> <li key={car.id}>
                    <img src={car.image} alt="Imagem do Carro" />
                    <div>
                      <label>{car.name}</label>
                      <label>{car.collection}</label>
                      <label>{car.year}</label>
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
      }else{
        return<></>
      }
      
    }
    return(
      <Container>
          <SearchBar/>
      </Container>
    )
}

export default SearchIpunt;