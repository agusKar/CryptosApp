import React, {Fragment, useState} from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
    font-family: "Bebas Nue", cursive;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1rem;
    margin-top: 2rem;
    display: block;
`;
const Select = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
`;

const useCriptomoneda = (label, stateInicial, opciones) =>{
    // State de nuestro custom hook
    const [state, actualizarState] = useState(stateInicial);

    // Interfaz
    const SelectCripto = () => {
        return (
            <Fragment>
                <Label>{label}</Label>
                <Select
                    onChange={e => actualizarState(e.target.value) }
                    value={state}
                >
                    <option value="">- Seleccione -</option>
                    {opciones.map(opcion=>(
                        <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name}>{opcion.CoinInfo.FullName}</option>
                    ))}
                </Select>
            </Fragment>
        );
    }

    // Retorno un array con el state, la interfaz y la fn que modifica el state
    return [state, SelectCripto, actualizarState];
}

export default useCriptomoneda;