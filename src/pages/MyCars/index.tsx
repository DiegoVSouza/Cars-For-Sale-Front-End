import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { Cars, Container, Content, NoAccount } from "./styles";

import { FiTrash } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { ApplicationState } from "../../store";
import { useSelector } from "react-redux";
import { CategoryModal } from "../../components/CategoryModal";

interface image {
  path: string
  car_id: string
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
  const [isOpen, setIsOpen] = useState(false);
  const { data: user } = useSelector((state: ApplicationState) => state.tokens);

  const history = useNavigate();

  const goToSalesPage = () => {
    history("/salespage");
  };
  const goToCategoryPage = () => {
    history("/salespage");
  };
  async function loadProducts() {
    const { data: cars } = await api.get(`/cars/available?user_id=${user.user.id}`);
    const { data: categories } = await api.get<category[]>(`/categories`)
    const { data: images } = await api.get<image[]>(`/cars/images`)

    const carsFormatted = await cars.map((car: Car) => {
      const category = categories.find((category) => category.id === car.category_id)
      const image = images.filter((image) => image.car_id === car.id)
      return {
        ...car,
        price: new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(car.price),
        images: image[0],
        category: category?.name
      };
    });
    console.log(carsFormatted)

    setMyCars(carsFormatted);
  }
  useEffect(() => {
    loadProducts();
  }, []);

  const handleOpenModal = () => {
    setIsOpen(true)
  }

  const handleCloseModal = () => {
    setIsOpen(false)
  }

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
            <button className="add category" onClick={handleOpenModal}>
              <AiOutlinePlus />
              Categoria
            </button>
            <button className="add" onClick={goToSalesPage}>
              <AiOutlinePlus />
              Carro
            </button>
          </div>

          <Cars>
            {myCars.map((car) => (
              <li key={car.id}>
                <FiTrash onClick={() => DeleteCar(car.id)} size={50} />
                {/* Mostrar imagens upadas ainda nao implementado */}
                <img src={"http://pngimg.com/uploads/volkswagen/volkswagen_PNG1821.png"} alt="Imagem do Carro" />
                <label>{car.name}</label>
                <label>{car.brand}</label>
                <label>{car.category}</label>
                <strong>{car.price}</strong>
              </li>
            ))}
          </Cars>
          {Empty()}
        </Content>
        <CategoryModal isOpen={isOpen} onRequestClose={handleCloseModal} />
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
