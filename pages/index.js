import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import clienteAxios from '../config/axios';

import Layout from '../components/layout/layout';
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
    height: 22rem;
  }
`;

export default function Home() {

  // State de países
  const [ paises, setPaises ] = useState([]);

  // Hook de router
  const router = useRouter();
  const { query : { busqueda, region } } = router;

  useEffect(() => {
    const obtenerPaises = async () => {
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
          return;
        }

        setPaises(respuesta.data);
      } catch (error) {
        console.log(error);
        setPaises([]);
      }
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

          <div css={css`
            margin-top: 4rem;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
          `}>
            {paises.map(pais => (
              <div 
                key={pais.numericCode}
                css={css`
                  width: 20%;
                  margin-right: 6.66%;
                  margin-bottom: 5%;
                  
                  :nth-of-type(4n) {
                    margin-right: 0;
                  }
                `}
              >
                <Pais>
                  <img src={pais.flag} />

                  <div>
                    <strong>{pais.name}</strong>

                    <p><span>Pupulation: </span>{pais.population}</p>
                    <p><span>Region: </span>{pais.region}</p>
                    <p><span>Captial: </span>{pais.capital}</p>
                  </div>
                </Pais>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}
