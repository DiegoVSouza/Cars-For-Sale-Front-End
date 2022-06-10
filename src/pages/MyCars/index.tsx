import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import { Cars, Container, Content, NoAccount } from "./styles";

import { useLogin } from '../../hooks/useLogin'
import { FiTrash } from "react-icons/fi";


interface Car{
    id: number,
    name: string,
    collection: string,
    price: number,
    category: string,
    trade: string,
    km: string,
    year: string,
    file: File | string,
  }

const MyCars = (): JSX.Element => {

  // Erro na imagem pois JSON Server não recebe o arquivo file, necessario modificação por banco de dados
    const [myCars, setMyCars] = useState<Car[]>([]);

    const { isLogged } = useLogin()

    async function loadProducts() {
      const {data: cars} = await api.get(`mycars`)
      const carsFormatted = cars.map(function (car: Car) {
        return { ...car, price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(car.price ) }
      })
      setMyCars(carsFormatted)
    }
    

    useEffect(() => {
      
        loadProducts();
      }, []);

      function Empty(){
          if(myCars.length === 0){
              return (
                  <div>
                    <label>Você ainda não possui anuncios</label>
                    <Link to='/salespage'><button>Crie seu primeiro anuncio agora</button></Link>
                  </div>
              )
          }
          return <></>
      }

      function DeleteCar(carId:number){

        api.delete(`mycars/${carId}`)
        loadProducts();
       
      }
      
    if(isLogged){
      return(
        <Container>

            <Content>
              
                <h1>MyCars</h1>
                <Cars>
                {myCars.map(car=>(
                    <li key={car.id}>
                      <FiTrash onClick={()=>DeleteCar(car.id)}/>
                    <img src={car.file.toString()} alt="Imagem do Carro" />
                    <label>{car.name}</label>
                    <label>{car.collection}</label>
                    <label>{car.year}</label>
                    <strong>{car.price}</strong>
                </li>
                ))}
                </Cars>
                {Empty()}
                
              
            </Content>
        </Container>

    )
    }else{
      return(
        <>
        <NoAccount>
          <div>
            <h1>Por favor se conecte para acessar essar area</h1>
            <Link to='/login'><button>Fazer Login</button></Link>
          </div>
        </NoAccount></>
      )
      
    }
    
}

export default MyCars;