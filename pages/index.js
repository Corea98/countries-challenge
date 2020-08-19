import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Router from 'next/router';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import clienteAxios from '../config/axios';

import Layout from '../components/layout/Layout';
import Buscar from '../components/ui/Buscar';

const Pais = styled.div`
  background-color: #2B3945;
  border-radius: 3px;
  overflow: hidden;
  

  div {
    padding: 2.3rem 3rem;
  }

  strong {
    font-size: 1.6rem;
    margin-bottom: 2rem;
    display: block;
  }

  span {
    font-weight: 600;
  }

  img {
    width: 100%;

    @media screen and (min-width: 1201px) {
      height: 18rem;
    }

    @media screen and (max-width: 1200px) {
      height: 22rem;
    }

    @media screen and (max-width: 375px) {
      width: 100%;
    }
  }

  &:hover {
    cursor: pointer;
  }
`;

export default function Home() {

  // State de países
  const [paises, setPaises] = useState([]);
  const [cargando, setCargando] = useState(true);

  // Hook de router
  const router = useRouter();
  const { query: { busqueda, region } } = router;

  useEffect(() => {
    const obtenerPaises = async () => {
      setCargando(true);

      try {
        let respuesta;

        if (busqueda) {
          respuesta = await clienteAxios.get(`/name/${busqueda}`);
          console.log(respuesta);
        } else {
          respuesta = await clienteAxios.get('/all');
        }

        if (region) {
          setPaises(respuesta.data.filter(r => (r.region === region)));
          setCargando(false);
          return;
        }

        setPaises(respuesta.data);
      } catch (error) {
        console.log(error);
        setPaises([]);
      }

      setCargando(false);
    };
    obtenerPaises();
  }, [busqueda, region]);

  return (
    <Layout>
      <div css={css`
        color: white;
      `}>
        <div className="contenedor">

          <Buscar />

          {/* CONTENEDOR DE PAÍSES */}
          <div css={css`
            margin-top: 4rem;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
          `}>
            {cargando ? 'Obteniendo los datos...' : (
              <>
                {
                  paises.map(pais => (
                    /* CONTEEDOR DE PAÍS */
                    <div
                      key={pais.alpha3Code}
                      css={css`
                        
                        @media screen and (min-width: 1201px) {
                          width: 20%;
                          margin-right: 6.66%;
                          margin-bottom: 5%;
                          
                          :nth-of-type(4n) {
                            margin-right: 0;
                          }
                        }

                        @media only screen and (max-width: 1200px) and (min-width: 831px) {
                          width: 28.33%;
                          margin-right: 7.5%;
                          margin-bottom: 5%;

                          :nth-of-type(3n) {
                            margin-right: 0;
                          }
                        }

                        @media only screen and (max-width: 830px) {
                          width: 45%;
                          margin-right: 10%;
                          margin-bottom: 5%;

                          :nth-of-type(2n) {
                            margin-right: 0;
                          }
                        }

                        @media screen and (max-width: 570px) {
                          width: 80%;
                          margin: 0 auto 10% auto !important;
                        }
                      `}
                    >
                      <Link href="/pais/[id]" as={`/pais/${pais.alpha3Code}`}>
                        <Pais>
                          <img src={pais.flag} />

                          <div>
                            <strong>{pais.name}</strong>

                            <p><span>Pupulation: </span>{pais.population}</p>
                            <p><span>Region: </span>{pais.region}</p>
                            <p><span>Captial: </span>{pais.capital}</p>
                          </div>
                        </Pais>
                      </Link>
                    </div>
                  ))
                }
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}
