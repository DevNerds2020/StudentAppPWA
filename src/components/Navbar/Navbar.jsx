/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import { css } from '@emotion/css';
import NavItem from './NavItem';
import translation from '../../utils/translation';
import LoginDialog from '../LoginDialog/LoginDialog';
import SignUpDialog from '../SignUpDialog/SignUpDialog';
import AboutUs from '../AboutUs/AboutUs';

function Navbar() {
  const localeLanguage = useSelector((state) => state.data.localeLanguage);
  const [openDialog, setOpenDialog] = React.useState('');

  const closeDialog = () => {
    setOpenDialog('');
  };

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
        <div onClick={() => setOpenDialog('about')}>
          <NavItem>{translation[localeLanguage].aboutUs}</NavItem>
        </div>
        <NavItem>{translation[localeLanguage].contactUs}</NavItem>
        <NavItem>{translation[localeLanguage].map}</NavItem>
        <NavItem>{translation[localeLanguage].vip}</NavItem>
        <div onClick={() => setOpenDialog('signup')}>
          <NavItem>{translation[localeLanguage].signUp}</NavItem>
        </div>
        <div onClick={() => setOpenDialog('login')}>
          <NavItem>{translation[localeLanguage].login}</NavItem>
        </div>

        <LoginDialog closeDialog={closeDialog} open={openDialog === 'login'} />
        <SignUpDialog
          closeDialog={closeDialog}
          open={openDialog === 'signup'}
        />
        <AboutUs closeDialog={closeDialog} open={openDialog === 'about'} />
      </Box>
    </Box>
  );
}

export default Navbar;
