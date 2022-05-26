
import LogoImg from '../../assets/images/logo.svg'
import CoverImg from '../../assets/images/CoverImg.png'

import { Card, Container } from './styles';
import { Link } from 'react-router-dom';


const InitialPage = (): JSX.Element=>{


    return(
        <Container>
            <Card>
                <img src={LogoImg} alt="Logo" />
                <img src={CoverImg} alt="Cover" />
                <section>
                    <h1>Faça seu pedido em menos de 5 minutos</h1>
                    <h3>Pizzas, hamburgues, bebidas e muito mais</h3>
                    <div>
                        <Link to={'/createaccount'}><button className='registerBtn'>Cadastre-se</button></Link>
                        <Link to={'/login'}><button>Fazer Login</button></Link>
                    </div>
                    
                </section>
            </Card>
        </Container>
    )

}

export default InitialPage;