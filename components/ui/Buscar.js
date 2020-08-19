import React, { useState, useEffect, useContext } from 'react';
import Router from 'next/router';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { DarkModeContext } from '../../context/DarkModeContext';

const InputText = styled.input`
    border: none;
    padding: 1.7rem 0;
    font-size: 1.4rem;
    width: 100%;

    ${'' /* ::placeholder { color: white; } */}

    outline:none !important;
    outline-width: 0 !important;
    box-shadow: none;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
`;

const Select = styled.select`
    border: none;
    padding: 1.7rem;
    font-size: 1.4rem;
    border-radius: 0.3rem;
    width: 200px;

    outline:none !important;
    outline-width: 0 !important;
    box-shadow: none;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;

`;

const Buscar = () => {

    // Context
    const { darkMode } = useContext(DarkModeContext);

    const [busqueda, setBusqueda] = useState('');
    const [region, setRegion] = useState(null);
    const [enviarBusqueda, setEnviarBusqueda] = useState(false);

    // Al presionar enter
    const handleSubmit = e => {
        e.preventDefault();
        
        setEnviarBusqueda(true);
    }

    // Enviar los datos al index para luego hacer la búsqueda
    useEffect(() => {
        const buscar = () => {
            // Redireccionar a la página principal con los parámetros de búsqueda
            let query = {};

            if (region) query.region = region;
            if (busqueda.trim() !== '') query.busqueda = busqueda;

            Router.push({
                pathname: '/',
                query
            });
        }
        buscar();
        setEnviarBusqueda(false);
    }, [region, enviarBusqueda])

    return (
        <form
            css={css`
                display: flex;
                justify-content: space-between;
            `}
            onSubmit={handleSubmit}
        >

            {/* BARRA DE BÚSQUEDA */}
            <div css={css`
                display: flex;
                align-items: center;
                background-color: ${ darkMode ? '#2B3945': 'white'};
                border-radius: 0.3rem;
                width: 500px;
            `}>
                <img css={css`
                    width: 1.7rem;
                    margin: 0 2.7rem;
                `} src="/static/icons/search.svg" />

                <InputText
                    type="text"
                    placeholder="Search for country..."
                    onChange={e => setBusqueda(e.target.value)}
                />
            </div>

            <div>
                <Select
                    onChange={e => {setRegion(e.target.value)}}
                    defaultValue=""
                >
                    <option value="">Filter by Region</option>
                    <option value='Africa'>Africa</option>
                    <option value='Americas'>América</option>
                    <option value='Asia'>Asia</option>
                    <option value='Europe'>Europe</option>
                    <option value='Oceania'>Oceania</option>
                </Select>
            </div>
        </form>
    );
}

export default Buscar;