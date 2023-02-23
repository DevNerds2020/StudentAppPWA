import React from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import { css } from '@emotion/css';
import NavItem from './NavItem';
import translation from '../../utils/translation';

function Navbar() {
  const localeLanguage = useSelector((state) => state.data.localeLanguage);

  return (
    <Box
      className={css`
        display: flex
        flex-direction: column;
        color: #000;
        font-size: 3vh;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        bottom: 0;
        position: absolute;
        width: 30rem;
        @media (max-width: 600px){
          font-size: 1.5vh;
        }
      `}
    >
      <Box
        className={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          flex-wrap: wrap;
          flex-direction: row;
          width: 100%;
          background-color: #8f94fb;
        `}
      >
        <NavItem>{translation[localeLanguage].aboutUs}</NavItem>
        <NavItem>{translation[localeLanguage].contactUs}</NavItem>
        <NavItem>{translation[localeLanguage].map}</NavItem>
        <NavItem>{translation[localeLanguage].vip}</NavItem>
        <NavItem>{translation[localeLanguage].signUp}</NavItem>
        <NavItem>{translation[localeLanguage].login}</NavItem>
      </Box>
    </Box>
  );
}

export default Navbar;
