import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import axios from '../../config/axios';

import Layout from '../../components/layout/Layout';
import Boton from '../../components/ui/Boton';

const ContenedorDerecha = styled.div`
    height: 80px;
    padding-top: 2rem;

    h2 {
        font-size: 4rem;
        font-weight: bold;
    }

    @media (min-width: 1101px) {
        width: 50%;
    }

    @media (min-width: 0) and (max-width: 1100px) {
        width: 100%;
        margin: 0 auto;
    }
`;

const Pais = () => {

    // Context

    // States
    const [pais, setPais] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    // Routing
    const router = useRouter();
    const { query: { id } } = router;

    useEffect(() => {
        setLoading(true);

        if (id) {
            const obtenerPais = async () => {
                try {
                    const resultado = await axios.get(`alpha/${id}`);
                    setPais(resultado.data);

                    setLoading(false);
                } catch (error) {
                    console.log(error);
                    setError(true);
                    setLoading(false);
                }
            }
            obtenerPais();
        }
    }, [id])

    return (
        <Layout>
            <div className="contenedor">
                {loading ? <p css={css` font-size: 1.6rem`}>Cargando...</p> : (
                    <>
                        <Link href="/">
                            <Boton css={css`
                            margin-top: 6rem;
                        `}>← Back</Boton>
                        </Link>

                        {error ? <p css={css` font-size: 1.6rem; margin-top: 5rem;`}>No se pudo realizar la acción solicitada</p> : (
                            /* CONTENEDOR PRINCIPAL */
                            <div css={css`
                            margin-top: 8rem;

                            @media (min-width: 1101px) {
                                display: flex;
                                justify-content: space-between;
                            }

                            @media (min-width: 0) and (max-width: 1100px) {
                                display: flex;
                                flex-wrap: wrap;
                            }
                        `}>
                                {/* IMAGEN IZQUIERDA */}
                                <img
                                    src={pais.flag}
                                    css={css`

                                    @media (min-width: 1101px) {
                                        width: 40%;
                                    }

                                    @media (min-width: 0) and (max-width: 1100px) {
                                        width: 90%;
                                        margin: 0 auto;
                                    }
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

                                        @media (max-width: 650px) {
                                            flex-wrap: wrap;
                                        }
                                    `}>
                                        <div css={css`
                                            width: 50%;

                                            @media (max-width: 650px) {
                                                width: 90%;
                                                margin-bottom: 3rem;
                                            }
                                        `}>
                                            <p><strong>Native Name:</strong> {pais.nativeName}</p>
                                            <p><strong>Population:</strong> {new Intl.NumberFormat().format(pais.population)}</p>
                                            <p><strong>Region:</strong> {pais.region}</p>
                                            <p><strong>Sub Region:</strong> {pais.subregion}</p>
                                            <p><strong>Capital:</strong> {pais.capital}</p>
                                        </div>

                                        <div css={css`
                                            width: 50%;

                                            @media (max-width: 650px) {
                                                width: 90%;
                                            }
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

                                        @media (max-width: 650px) {
                                            p {
                                                margin-right: 60%;
                                                margin-bottom: 3rem;
                                            }
                                        }
                                    `}>
                                        <p>Border Countries: </p>

                                        { pais.borders.map(border => (
                                            <Link 
                                                key={border}
                                                href="/pais/[id]" as={`/pais/${border}`} 
                                            >
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