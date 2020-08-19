import React, {useContext} from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { DarkModeContext } from '../../context/DarkModeContext';

const ContenedorHeader = styled.div`
    max-width: 1440px;
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`;

const Header = () => {

    // Context
    const { darkMode, setDarkMode } = useContext(DarkModeContext);

    return (
        <header 
            css={css`
            `}
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
                    <span 
                        css={css`
                            &:hover {
                                cursor: pointer;
                            }
                        `}
                        onClick={() => {
                            localStorage.setItem('darkMode', !darkMode);
                            setDarkMode(!darkMode);
                        }}
                    >Dark Mode</span>
                </div>
            </ContenedorHeader>
        </header>
    );
}

export default Header;