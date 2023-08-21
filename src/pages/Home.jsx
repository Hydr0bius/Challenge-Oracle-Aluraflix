import React, { useState } from 'react'
import HeaderVideo from '../components/Home/HeaderVideo';
import {v4 as uuid} from 'uuid';
import GrupoContenido from '../components/GrupoContenido';

const Home = () => {

    // const [CrearVideo, setCrearVideo] = useState([{
    //   id: uuid(),
    //   video: 'https://youtu.be/EK_LN3XEcnw',
    //   equipo: 'Programación',
    // }])

    const [Canales, setCanales] = useState([
        {
          id: uuid(),
          titulo: 'Back End',
          colorPrimario: '#ff8a29',
          colorSecundario: '#ffeedf',
          descripcion: 'Formación en Back End de Alura Latam',
        },
        {
            id: uuid(),
            titulo: 'Programación',
            colorPrimario: '#57c278',
            colorSecundario: '#d9f7e9',
            descripcion: 'Formación en Programación de Alura Latam',
          },
          {
            id: uuid(),
            titulo: 'Front End',
            colorPrimario: '#82cffa',
            colorSecundario: '#e8f8ff',
            descripcion: 'Formación en Front End de Alura Latam',
          },
          {
            id: uuid(),
            titulo: 'Data Science',
            colorPrimario: '#a6d157',
            colorSecundario: '#fdf8e2',
            descripcion: 'Formación en Data Science de Alura Latam',
          },
          {
            id: uuid(),
            titulo: 'Develop',
            colorPrimario: '#ed6b69',
            colorSecundario: '#fde7e8',
            descripcion: 'Formación en Develop de Alura Latam',
          },
          {
            id: uuid(),
            titulo: 'UX y Diseño',
            colorPrimario: '#db6ebf',
            colorSecundario: '#fae9f5',
            descripcion: 'Formación en UX y Diseño de Alura Latam',
          },
          {
            id: uuid(),
            titulo: 'Mobile',
            colorPrimario: '#ffba05',
            colorSecundario: '#fff5d9',
            descripcion: 'Formación en Mobile de Alura Latam',
          },
          {
            id: uuid(),
            titulo: 'Innovación y Gestión',
            colorPrimario: '#ff8a29',
            colorSecundario: '#ffeedf',
            descripcion: 'Formación en Innovación y Gestión de Alura Latam',
          },
    ]);
    return (
        <>
            <HeaderVideo/>
            {/* recorre el arreglo y lo envia a grupoContenido */}
            {
              Canales.map((grupo)=><GrupoContenido datos={grupo}/>)
            }
        </>
    );
}

 
export default Home;