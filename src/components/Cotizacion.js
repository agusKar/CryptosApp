import React from 'react';
import styled from '@emotion/styled';

const ResultadoDiv = styled.div`
    color: white;
    font-family: Arial, Helvetica, sans-serif;
`;
const Info = styled.p`
    font-size: 18px;
    span{
        font-weight: bold;
    }
`;
const Precio = styled.p`
    font-size: 30px;
    span{
        font-weight: bold;
    }
`;

const Cotizacion = ({resultadoCotizacion}) => {
    if(Object.keys(resultadoCotizacion).length === 0) return null;
    return ( 
        <ResultadoDiv>
            <Precio>El precio es: <span>{resultadoCotizacion.PRICE}</span></Precio>
            <Info>Precio más alto del día: <span>{resultadoCotizacion.HIGHDAY}</span></Info>
            <Info>Precio más bajo del día: <span>{resultadoCotizacion.LOWDAY}</span></Info>
            <Info>Variación últimas 24 horas: <span>{resultadoCotizacion.CHANGEPCT24HOUR}</span></Info>
            <Info>Última actualización: <span>{resultadoCotizacion.LASTUPDATE}</span></Info>
        </ResultadoDiv>
     );
}
 
export default Cotizacion;