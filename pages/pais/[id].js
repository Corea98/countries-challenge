import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import axios from '../../config/axios';

import Layout from '../../components/layout/Layout';
import Boton from '../../components/ui/Boton';

const ContenedorDerecha = styled.div`
    color: white;
    height: 80px;
    width: 50%;
    padding-top: 2rem;

    h2 {
        font-size: 4rem;
        font-weight: bold;
    }
`;

const Pais = () => {

    // States
    const [pais, setPais] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    // Routing
    const router = useRouter();
    const { query: { id } } = router;

    useEffect(() => {
        if (id) {
            const obtenerPais = async () => {
                try {
                    const resultado = await axios.get(`alpha/${id}`);
                    setPais(resultado.data);

                    setLoading(false);
                } catch (error) {
                    console.log(error);
                    setError(true);
                }
            }
            obtenerPais();
        }
    }, [id])

    return (
        <Layout>
            <div className="contenedor">
                {loading ? <p>Cargando...</p> : (
                    <>
                        <Link href="/">
                            <Boton css={css`
                            margin-top: 6rem;
                        `}>← Back</Boton>
                        </Link>

                        {error ? <p>No se pudo realizar la acción solicitada</p> : (
                            /* CONTENEDOR PRINCIPAL */
                            <div css={css`
                            display: flex;
                            justify-content: space-between;
                            margin-top: 8rem;
                        `}>
                                {/* IMAGEN IZQUIERDA */}
                                <img
                                    src={pais.flag}
                                    css={css`
                                    width: 40%;
                                `}
                                />

                                {/* CONTENEDOR PARTE DERECHA */}
                                <ContenedorDerecha>
                                    <h2>{pais.name}</h2>

                                    {/* CONTENEDOR */}
                                    <div css={css`
                                        display: flex;
                                        justify-content: space-between;

                                        p {
                                            margin-bottom: 1.8rem;
                                            font-size: 1.4rem;
                                        }
                                    `}>
                                        <div css={css`
                                            width: 50%;
                                        `}>
                                            <p><strong>Native Name:</strong> {pais.nativeName}</p>
                                            <p><strong>Population:</strong> {pais.population}</p>
                                            <p><strong>Region:</strong> {pais.region}</p>
                                            <p><strong>Sub Region:</strong> {pais.subregion}</p>
                                            <p><strong>Capital:</strong> {pais.capital}</p>
                                        </div>

                                        <div css={css`
                                            width: 50%;
                                        `}>
                                            <p><strong>Top Level Domain:</strong> {pais.topLevelDomain}</p>
                                            <p><strong>Currencies:</strong> {pais.currencies.map((currency, id) => (currency.name + ((pais.currencies.length - 1 !== id) ? ', ' : '')))}</p>
                                            <p><strong>Languages:</strong> {pais.languages.map((language, id) => (language.name + ((pais.languages.length - 1 !== id) ? ', ' : '')))}</p>
                                        </div>
                                    </div>

                                    {/* CONTENEDOR COUNRIES */}
                                    <div css={css`
                                        display: flex;
                                        flex-wrap: wrap;
                                        margin-top: 7rem;
                                    `}>
                                        <p>Border Countries: </p>

                                        { pais.borders.map(border => (
                                            <Link href="/pais/[id]" as={`/pais/${border}`} >
                                                <div css={css`
                                                    margin-left: 2rem;
                                                    margin-bottom: 2rem;
                                                `}>
                                                    <Boton>{border}</Boton>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </ContenedorDerecha>
                            </div>
                        )}
                    </>
                )}
            </div>
        </Layout>
    );
}

export default Pais;