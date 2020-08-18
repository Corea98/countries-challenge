import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const ContenedorHeader = styled.div`
    max-width: 1440px;
    width: 95%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`;

const Header = () => {
    return (
        <header 
            css={css`
                color: white;
            `}
            className="bg-dark"
        >
            <ContenedorHeader>
                <div css={css`
                    display: flex;
                    align-items: center;
                    font-size: 2rem;
                    font-weight: bold;
                `}>
                    <p>Where in the world?</p>
                </div>

                <div css={css`
                    display: flex;
                    align-items: center;
                `}>
                    <span>Dark Mode</span>
                </div>
            </ContenedorHeader>
        </header>
    );
}

export default Header;