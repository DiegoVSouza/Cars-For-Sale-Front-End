import React, { useState, useEffect, useMemo, FormEvent } from "react";

import { Container, Content, ProductSection } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";

import { api } from "../../services/api";
import Dropzone, { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ApplicationState } from "../../store";

interface ICar {
  id: number;
  name: string;
  description: string;
  license_plate: string;
  brand: string;
  price: number;
  category: string;
  file: File | string;
}

const schema = yup
  .object({
    name: yup.string().required("Informe seu nome"),
    category: yup.string().required("Insira a categoria").nullable(false),
    description: yup.string().required("Informe as especificações"),
    brand: yup.string().required("Informe a marca do carro"),
    license_plate: yup.string().required("Informe a placa do carro"),
    price: yup
      .number()
      .required("Insira o preço sugerido")
      .typeError("Insira o preço sugerido"),
  })
  .required();

interface categories {
  name: string;
  id: string;

}

interface File {
  name: string;
  filename: string;
}

interface Files {
  path: string;
  preview: string;
}

const SalesPage = (): JSX.Element => {
  const { data: user } = useSelector((state: ApplicationState) => state.tokens);


  const [file, setFile] = useState<File | string>("");
  const [files, setFiles] = useState([] as any);
  const [categories, setCategories] = useState([] as categories[]);

  const [fileErrorMessage, setFileErrorMessage] = useState('');

  const history = useNavigate()


  const [fileUrl, setfileUrl] = useState<
    string | undefined | ArrayBuffer | null
  >();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<ICar>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (files.length > 0) {
      setFileErrorMessage('')
    }
  }, [files])

  useEffect(() => {
    async function loadData() {
      const { data } = await api.get('/categories')
      setCategories(data)
    }
    loadData()
  }, [])


  const onSubmit: SubmitHandler<ICar> = async (data) => {
    if (data.category === "null") {
      setError("category", {
        type: "focus",
        message: "Selecione a categoria",
      });
      return;
    }
    if (files.length === 0) {
      setFileErrorMessage('Adicione imagens do carro')
      return
    }

    setFileErrorMessage('')
    const car = {
      name: data.name,
      description: data.description,
      price: data.price,
      category_id: data.category,
      brand: data.brand,
      license_plate: data.license_plate
    };


    const formData = new FormData()
    files.map((file: any) => {
      formData.append("images", file)

    })

    await api.post("/cars", car, {
      headers: {
        'authorization': `Basic ${user.refresh_token}`
      },

    }).then(async ({ data }) => {

      await api.post(`/cars/images/${data.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'authorization': `Basic ${user.refresh_token}`
        },

      })
    })
    history('/mycars')
  };


  const thumbInner = {
    display: "flex",
    minWidth: 0,
    overflow: "hidden"
  };



  const activeStyle = {
    borderColor: "#2196f3",
    width: "100%",
    padding: '10rem',
  };

  const acceptStyle = {
    borderColor: "#00e676"
  };

  const rejectStyle = {
    borderColor: "#ff1744"
  };

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    accept: { 'image/*': ['.jpeg', '.jpg', '.png'] },
    onDrop: (acceptedFiles: any) => {
      console.log("accepted", acceptedFiles);
      setFiles(
        acceptedFiles.map((file: any) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      );
    }
  });

  const style = React.useMemo(
    () => ({
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {})
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  const thumbs = files.map((file: any, index: any) => {
    return (
      <div className="thumb" style={{
        position: "absolute",
        left: index < 3 ? `${2 + index * 5}rem` : `${2 + 4 * 5}rem`,
        zIndex: `${10 - index}`
      }} key={file.name}>
        <div style={thumbInner}>
          {index < 3 ? <img alt="selected" src={file.preview} className='img' /> : <h2>+{files.length - 3}</h2>}
        </div>
      </div>
    )

  });

  useEffect(
    () => () => {
      files.forEach((file: any) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <Container >
      <Content>
        <ProductSection>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Nome do carro</label>
            <input
              type="text"
              placeholder="Digite aqui o nome"
              {...register("name")}
            />
            <p>{errors.name?.message}</p>

            <label>Descrição</label>
            <input
              type="text"
              placeholder="Digite aqui a descrição"
              {...register("description")}
            />
            <p>{errors.description?.message}</p>
            <label>Preço</label>
            <input
              type="number"
              {...register("price")}
              placeholder="Digite aqui o preço"
            />
            <p>{errors.price?.message}</p>

            <div>
              <div>
                <label>Marca</label>
                <input
                  type="string"
                  placeholder="digite aqui a marca"
                  {...register("brand")}
                />
                <p>{errors.brand?.message}</p>
              </div>
              <div>
                <label>Placas</label>
                <input
                  type="string"
                  placeholder="digite aqui a placa"
                  {...register("license_plate")}
                />
                <p>{errors.license_plate?.message}</p>
              </div>
              <div className="ratiodiv">
                <label>Categoria</label>

                <select {...register("category")}>
                  <option value="teste">--Select--</option>
                  {categories.map(category => (
                    <option value={category.id}>{category.name}</option>

                  ))}

                </select>
                <p>{errors.category?.message}</p>
              </div>

            </div>
            <input type="submit" />
          </form>

          <div>
            <label className={fileErrorMessage !== '' ? 'hidden' : ''}>Agora escolha as imagens a serem exibidas</label>
            <label className="labelError">{fileErrorMessage}</label>
            <section className="container">
              <div id="baseStyle" {...getRootProps({ className: "dropzone", style })}>
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p>Solte os arquivos aqui.</p>
                ) : (
                  <p>Jogue os arquivos aqui ou clique para escolher</p>
                ) || files.length > 0 ? <p>Clique ou jogue para mudars as imagens</p> : <p>Jogue os arquivos aqui ou clique para escolher</p>}
              </div>
              <aside className="aside">{thumbs}</aside>
            </section>
          </div>
        </ProductSection>
      </Content>
    </Container>
  );
}

export default SalesPage
