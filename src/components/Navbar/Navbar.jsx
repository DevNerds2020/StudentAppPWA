/* eslint-disable no-nested-ternary */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box } from '@mui/material';
import { css } from '@emotion/css';
import NavItem from './NavItem';
import translation from '../../utils/translation';
import LoginDialog from '../LoginDialog/LoginDialog';
import SignUpDialog from '../SignUpDialog/SignUpDialog';
import InfoDialog from '../InfoDialog/InfoDialog';
import MapDialog from '../InfoDialog/MapDialog';

function Navbar() {
  const localeLanguage = useSelector((state) => state.data.localeLanguage);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.data.user);
  const [openDialog, setOpenDialog] = React.useState('');

  const closeDialog = () => {
    setOpenDialog('');
  };

  return (
    <Box
      className={css`
        display: flex;
        flex-direction: column;
        color: #000;
        font-size: 3vh;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        top: 0;
        position: fixed;
        min-width: 50vh;
        padding-left: 1rem;
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
        <div onClick={() => setOpenDialog('contact')}>
          <NavItem>{translation[localeLanguage].contactUs}</NavItem>
        </div>
        <div onClick={() => setOpenDialog('map')}>
          <NavItem>{translation[localeLanguage].map}</NavItem>
        </div>
        <div onClick={() => setOpenDialog('vip')}>
          <NavItem>
            {translation[localeLanguage].vip}
          </NavItem>
        </div>
        {!user.username && (
          <>
            <div onClick={() => setOpenDialog('signup')}>
              <NavItem>{translation[localeLanguage].signUp}</NavItem>
            </div>
            <div onClick={() => setOpenDialog('login')}>
              <NavItem>{translation[localeLanguage].login}</NavItem>
            </div>
          </>
        )}
        {user.username && (
          <div
            onClick={() => {
              dispatch({
                type: 'SET_USER',
                payload: {},
              });
            }}
          >
            <NavItem>{translation[localeLanguage].logout}</NavItem>
          </div>
        )}

        <div>
          <NavItem>{user?.username}</NavItem>
        </div>

        <LoginDialog closeDialog={closeDialog} open={openDialog === 'login'} />
        <SignUpDialog
          closeDialog={closeDialog}
          open={openDialog === 'signup'}
        />
        <MapDialog open={openDialog === 'map'} closeDialog={closeDialog} />
        <InfoDialog
          closeDialog={closeDialog}
          open={
            openDialog === 'about'
            || openDialog === 'contact'
            || openDialog === 'vip'
          }
          title={
            openDialog === 'about'
              ? `${translation[localeLanguage].aboutUs}`
              : openDialog === 'contact' ? `${translation[localeLanguage].contactUs}` : 'VIP'
          }
          isContact={openDialog === 'contact'}
        />
      </Box>
    </Box>
  );
}

export default Navbar;
