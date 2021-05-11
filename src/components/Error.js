import React from 'react';
import styled from '@emotion/styled';

const ErrorMensaje = styled.p`
    background-color: #b7322c;
    color: white;
    font-size: 30px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    padding: 1rem;
    font-family: 'Bebas Nue';
`;

const Error = ({mensaje}) => {
    return ( 
        <ErrorMensaje>
            {mensaje}
        </ErrorMensaje>
     );
}
 
export default Error;