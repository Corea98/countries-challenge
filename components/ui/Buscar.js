import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const InputText = styled.input`
    border: none;
    padding: 1.7rem 0;
    font-size: 1.4rem;
    background-color: #2B3945;
    color: white;
    width: 100%;

    ::placeholder { color: white; }

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
    background-color: #2B3945;
    color: white;
    border-radius: 0.3rem;
    width: 200px;

    ::placeholder { color: white; }

    outline:none !important;
    outline-width: 0 !important;
    box-shadow: none;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;

`;

const Buscar = () => {
    return (
        <form css={css`
            display: flex;
            justify-content: space-between;
        `}>

            <div css={css`
                display: flex;
                align-items: center;
                background-color: #2B3945;
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
                />
            </div>

            <div>
                <Select>
                    <option selected disabled>Filter by Region</option>
                    <option>Africa</option>
                    <option>América</option>
                    <option>Asia</option>
                    <option>Europe</option>
                    <option>Oceania</option>
                </Select>
            </div>
        </form>
    );
}

export default Buscar;