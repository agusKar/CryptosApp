import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import imagen from './criptomonedas.png';
import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion';
import Spinner from './components/Spinner';

import Axios from 'axios';

const Titulo = styled.h1`
    font-family: "Bebas Nue", cursive;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2rem;
    margin-top: 2rem;
    display: block;
`;

const Contenedor = styled.div`
  max-width: 990px;
  margin: 0 auto;
  @media (min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

function App() {

  const [ moneda, guardarMoneda ] = useState('');
  const [ criptomoneda, guardarCriptomoneda ] = useState('');
  const [ Cargando, guardarCargando ] = useState(false);
  const [resultadoCotizacion, actualizarResultado] = useState({});
  
  useEffect(() => {

    const consultarApi = async () => {
      if(moneda === '') return;
  
      const urlApi = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

      const resultadoApi = await Axios.get(urlApi);

      // Mostrar el spinner
      guardarCargando(true);

      setTimeout(() => {
        guardarCargando(false);

        actualizarResultado(resultadoApi.data.DISPLAY[criptomoneda][moneda]);
      }, 1500);
    }
    consultarApi(); 

  }, [moneda, criptomoneda])

  return (
    <Contenedor>
      <div>
        <Imagen 
          src={imagen}
        />
      </div>
      <div>
        <Titulo>Cotizador de Criptomonedas</Titulo>
        <Formulario
          guardarMoneda={guardarMoneda}
          guardarCriptomoneda={guardarCriptomoneda}
        />

        {Cargando ?
          <Spinner />
        :
          <Cotizacion 
            resultadoCotizacion={resultadoCotizacion}
          />
        }
        
      </div>
    </Contenedor>
  );
}

export default App;
