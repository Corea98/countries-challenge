import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { css } from '@emotion/core';
import styled from '@emotion/styled';

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
`;

export default function Home() {

  const paises = [
    {
      name: "Nicaragua",
      flag: "https://restcountries.eu/data/abw.svg",
      population: 50000,
      region: "america",
      capital: "Managua"
    },
    {
      name: "Costa Rica",
      flag: "https://restcountries.eu/data/abw.svg",
      population: 50000,
      region: "america",
      capital: "San José"
    },
    {
      name: "Guatemala",
      flag: "https://restcountries.eu/data/abw.svg",
      population: 50000,
      region: "america",
      capital: "Managua"
    },
    {
      name: "Honduras",
      flag: "https://restcountries.eu/data/abw.svg",
      population: 50000,
      region: "america",
      capital: "Managua"
    },
    {
      name: "El Salvador",
      flag: "https://restcountries.eu/data/abw.svg",
      population: 50000,
      region: "america",
      capital: "San Salvador"
    },
    {
      name: "Honduras",
      flag: "https://restcountries.eu/data/abw.svg",
      population: 50000,
      region: "america",
      capital: "Managua"
    },
    {
      name: "El Salvador",
      flag: "https://restcountries.eu/data/abw.svg",
      population: 50000,
      region: "america",
      capital: "San Salvador"
    },
    {
      name: "Honduras",
      flag: "https://restcountries.eu/data/abw.svg",
      population: 50000,
      region: "america",
      capital: "Managua"
    },
    {
      name: "El Salvador",
      flag: "https://restcountries.eu/data/abw.svg",
      population: 50000,
      region: "america",
      capital: "San Salvador"
    },
    {
      name: "Honduras",
      flag: "https://restcountries.eu/data/abw.svg",
      population: 50000,
      region: "america",
      capital: "Managua"
    },
    {
      name: "El Salvador",
      flag: "https://restcountries.eu/data/abw.svg",
      population: 50000,
      region: "america",
      capital: "San Salvador"
    }
  ]

  return (
    <Layout>
      <div css={css`
        background-color: #202C37;
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
              <div css={css`
                width: 20%;
                margin-right: 6.66%;
                margin-bottom: 5%;
                
                :nth-of-type(4n) {
                  margin-right: 0;
                }
              `}>
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
