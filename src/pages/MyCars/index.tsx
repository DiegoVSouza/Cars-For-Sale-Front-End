import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { Cars, Container, Content, NoAccount } from "./styles";

import { FiTrash } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { ApplicationState } from "../../store";
import { useSelector } from "react-redux";

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

const MyCars = (): JSX.Element => {
  const [myCars, setMyCars] = useState<Car[]>([]);
  const { data: user } = useSelector((state: ApplicationState) => state.tokens);

  const history = useNavigate();

  const goToSalesPage = () => {
    history("/salespage");
  };
  async function loadProducts() {
    const { data: cars } = await api.get(`/cars/available?user_id=${user.user.id}`);
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
    setMyCars(carsFormatted);
  }
  useEffect(() => {

    loadProducts();
  }, []);

  function Empty() {
    if (myCars.length === 0) {
      return (
        <div>
          <label>Você ainda não possui anuncios</label>
          <Link to="/salespage">
            <button>Crie seu primeiro anuncio agora</button>
          </Link>
        </div>
      );
    }
    return <></>;
  }

  async function DeleteCar(carId: string) {
    await api.delete(`/cars/${carId}`, {
      headers: {
        'authorization': `Basic ${user.refresh_token}`
      },

    });
    loadProducts();
  }

  if (user.logged) {
    return (
      <Container>
        <Content>
          <div>
            <h1>MyCars</h1>
            {myCars.length > 0 ? <button className="add" onClick={goToSalesPage}>
              <AiOutlinePlus />
              Carro
            </button> : <></>}
          </div>

          <Cars>
            {myCars.map((car) => (
              <li key={car.id}>
                <FiTrash onClick={() => DeleteCar(car.id)} size={50} />
                <img src={car.images.image_name} alt="Imagem do Carro" />
                <label>{car.name}</label>
                <label>{car.brand}</label>
                <label>{car.category}</label>
                <strong>{car.price}</strong>
              </li>
            ))}
          </Cars>
          {Empty()}
        </Content>
      </Container>
    );
  } else {
    return (
      <>
        <NoAccount>
          <div>
            <h1>Por favor se conecte para acessar essar area</h1>
            <Link to="/login">
              <button>Fazer Login</button>
            </Link>
          </div>
        </NoAccount>
      </>
    );
  }
};

export default MyCars;
