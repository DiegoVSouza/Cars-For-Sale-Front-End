import React, { useState, useEffect, useMemo, FormEvent } from 'react';

import { Container, Content, ProductSection } from './styles';

import CoverImg from '../../assets/images/CoverImg.png'


import Header from '../../components/Header'

import { api } from '../../services/api';

interface Car{
  id: number,
  name: string,
  collection: string,
  price: number,
  category: string,
  trade: string,
  km: string,
  year: string,
  file: File | string
}


const SalesPage = (): JSX.Element => {

  const [id, setId] = useState(Math.round(Date.now()*Math.random()))

  const [name, setName] = useState('')
  const [collection, setCollection] = useState('')
  const [price, setPrice] = useState(0)
  const [category, setCategory] = useState('')
  const [trade, setTrade] = useState('')
  const [year, setYear] = useState('')
  const [km, setKm] = useState('')
  const [file, setFile] = useState<File | string>('')
  const [fileUrl, setfileUrl] = useState<string | undefined | ArrayBuffer | null>()

  const [status, setStatus] = useState({
    type: '',
    mensagem: ''
  });

  const [car, setCar] = useState<Car>()

  useEffect(()=>{
    setCar({
      id: id,
      name: name,
      collection: collection,
      price: price,
      category: category,
      trade: trade,
      km: km,
      year: year,
      file: file
    })
  },[name,collection,category,trade,year,km,file])

  

  function validate(){

    if(!name) return setStatus({type: 'error', mensagem: 'Erro: Necessário preencher o campo nome!'});
    if(!collection) return setStatus({type: 'error', mensagem: 'Erro: Necessário preencher o campo Linha!'});
    if(!price) return setStatus({type: 'error', mensagem: 'Erro: Necessário preencher o campo Preço!'});
    if(!category) return setStatus({type: 'error', mensagem: 'Erro: Necessário preencher o campo Categoria!'});
    if(!trade) return setStatus({type: 'error', mensagem: 'Erro: Necessário preencher o campo Troca!'});
    if(!year) return setStatus({type: 'error', mensagem: 'Erro: Necessário preencher o campo Ano!'});
    if(!km) return setStatus({type: 'error', mensagem: 'Erro: Necessário preencher o campo Kilometragem!'});
    if(!file) return setStatus({type: 'error', mensagem: 'Erro: Necessário preencher o campo Imagem!'});

    return true
  }


  

  async function addCar (e:FormEvent<HTMLFormElement>){
    e.preventDefault();

    if(!validate()) return;

    console.log(car?.file)
    if(!car) return;

    await api.post('mycars',{
      id: car.id,
      name: car.name,
      collection: car.collection,
      price: car.price,
      category: car.category,
      trade: car.trade,
      km: car.km,
      year: car.year,
      file: car.file
    })
      
      const saveDataForm = true;

    if (saveDataForm) {
      

      setStatus({
        type: 'success',
        mensagem: "Usuário cadastrado com sucesso!"
      });
      setCar({
        id: 0,
        name: '',
        collection: '',
        price: 0,
        category: '',
        trade: '',
        km: '',
        year: '',
        file: ''
      });
      
    } else {
      setStatus({
        type: 'error',
        mensagem: "Erro: Usuário não cadastrado com sucesso!"
      });

    };
 
  }

  const fileChangedHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    
    setFile(e.target.files[0]);

    const reader = new FileReader();

    reader.onloadend = () => {
      setfileUrl(reader.result as string);
    };

    if(e.target.files instanceof FileList){
      reader.readAsDataURL(e.target.files[0])
    }

              
  }

  let imagePreview = (<div className="picture">Please select an Image for Preview</div>);
      if (fileUrl) {
        imagePreview = (
          <div className="picture">
            <img src={fileUrl.toString()} alt="icon" />
            {' '}
          </div>
        );
      }

  return (
    <Container>
      <Header/> 
      <Content>
      {status.type === 'success' ? <p style={{ color: "green" }}>{status.mensagem}</p> : ""}
      {status.type === 'error' ? <p style={{ color: "#ff0000" }}>{status.mensagem}</p> : ""}
      <ProductSection>

          <form onSubmit={addCar}>
            <label>Nome do carro</label>
            <input type="text" onChange={(e)=> setName(e.target.value)} 
            placeholder='Digite aqui o nome'/>
            <label>Linha</label>
            <input type="text" onChange={(e)=> setCollection(e.target.value)} 
            placeholder='Digite aqui a linha'
            />
            <label>Preço</label>
            <input type="number" onChange={(e)=> setPrice(JSON.parse(e.target.value))} 
            placeholder='Digite aqui o preço'
            />
            <div>
              <div>
                <label>Categoria</label>

                <select name='trade' onChange={e => setCategory(e.target.value) }>
                <option value="null">--Select--</option>
                <option value="Sedan">Sedan</option>
                <option value="SUV">SUV</option>
                <option value="Hatch">Hatch</option>
                <option value="Pick-up">Pick-up</option>
                
            </select>
              </div>
              
              <div className='ratiodiv'>
              <label>Aceita Troca?</label>
              <input type="radio" name='trade'
              onChange={(e)=> setTrade(e.target.value)} 
              />
              <span>Sim</span>
              <input type="radio" name='trade'
              onChange={(e)=> setTrade(e.target.value)}/>
              <span>Não</span>
              </div>

              <div>
              <label>Ano</label>
              <input type="number" onChange={(e)=> setYear(e.target.value)} placeholder='digite aqui o ano' />
              
              </div>
              <div>
              <label>Kilometros rodados</label>
              <input type="number" onChange={(e)=> setKm(e.target.value)} placeholder='digite aqui os KM'/>
              
              </div>
              
            </div>
            <input type="submit" />
          </form>

        <div>
          <label htmlFor="image">Envie aqui uma imagem do carro</label>
          <input type="file" name="image" accept="image/png, image/jpeg" 
          id='image' onChange={fileChangedHandler}/>
          {imagePreview}
        </div>
      
        
        </ProductSection>

        </Content>
      

    </Container>
  );
};

export default SalesPage;

