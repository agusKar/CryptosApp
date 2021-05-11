import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import Axios from 'axios';

import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomoneda';

import Error from './Error';

const Boton = styled.input`
    margin-top:20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: white;
    cursor: pointer;

    &:hover{
        opacity: .8;
    }
    &:focus{
        outline: none;
    }
`;

const Formulario = ({guardarMoneda, guardarCriptomoneda}) => {

    // state para listado de cripto devueltas por la API
    const [ listadoCripto, guardarCriptomonedas ] = useState([]);

    const MONEDAS = [
        {codigo: 'USD', nombre: "Dolar EstadoUnidense"},
        {codigo: 'ARS', nombre: "Peso Argentino"},
        {codigo: 'EUR', nombre: "Euro"},
        {codigo: 'GBP', nombre: "Libra Esterlina"}
    ]

    // custom hook useMoneda
    const [moneda, Seleccionar, actualizarMoneda] = useMoneda('Seleccionar moneda', '', MONEDAS);

    // use criptomoneda
    const [criptomoneda, SelectCriptomoneda] = useCriptomoneda('Elije tu criptomoneda', '', listadoCripto);

    // State para error
    const [ error, guardarError ] = useState(false);

    // Ejecutar llamado a la API
    useEffect(() => {
        const consultarApi = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

            const resultadoApi = await Axios.get(url);

            guardarCriptomonedas(resultadoApi.data.Data);
        }
        consultarApi();
    }, [])

    // Cuando el usuario hace submit
    const cotizarMoneda = e => {
        e.preventDefault();

        // Validar que ambos campos no esten vacios
        if(moneda === '' || criptomoneda === ''){
            guardarError(true);
            return;
        }

        // Guardar los datos al componente principal
        guardarError(false);
        guardarMoneda(moneda);
        guardarCriptomoneda(criptomoneda);
    }

    return ( 
        <form
            onSubmit={cotizarMoneda}
        >
            {error ? <Error mensaje='Hubo un error.' /> : null}

            <Seleccionar />

            <SelectCriptomoneda />

            <Boton 
                type="submit"
                value="Cotizar"
            />
        </form>
     );
}
 
export default Formulario;