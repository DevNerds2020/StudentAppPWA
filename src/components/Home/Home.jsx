import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button, Menu, MenuItem } from '@mui/material';
import Fade from '@mui/material/Fade';
import { Link } from 'react-router-dom';
import { css } from '@emotion/css';
import translation from '../../utils/translation';
import './Home.css';

function Home() {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const { localeLanguage } = useSelector((state) => state.data);
  const localeTime = localeLanguage === 'en' ? 'en-US' : 'fa-IR';

  const open = Boolean(anchorEl);
  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeLanguage = (newLanguage) => {
    dispatch({
      type: 'CHANGE_LOCALE_LANGUAGE',
      payload: { localeLanguage: newLanguage },
    });
    handleClose();
  };
  return (
    <Box
      className={css`
        width: 100%;
      `}
    >
      <Button variant="contained" onClick={openMenu}>
        {localeLanguage}
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={() => changeLanguage('en')}>en</MenuItem>
        <MenuItem onClick={() => changeLanguage('fa')}>fa</MenuItem>
        <MenuItem onClick={() => changeLanguage('ar')}>ar</MenuItem>
      </Menu>
      <Box
        className={css`
          display: flex;
          justify-content: center;
          margin-top: 10px;
          flex-direction: column;
          align-items: center;
        `}
      >
        <h2
          className={css`
            font-size: 1.5rem;
            font-weight: bold;
            text-align: center;
            margin-bottom: 1.5rem;
          `}
        >
          {translation[localeLanguage].highSchoolBody}
        </h2>
        <Box className="homeAppContainer">
          <div className="homeRows">
            <Box className="iconBox">
              <Link className={css`  
              font-family: lalezar;
               text-decoration: none;
               background-color: rgb(0, 153, 255);
               color: #000000;
                width: 150px;
                height: 50px;
                font-size: 25px;
                font-weight: bold;
                margin: 0 10px;
                padding: 10px;
                border-radius: 15px;
                display: flex;
                justify-content: center;
                align-items: center;
  
               `} to="todo">
                {translation[localeLanguage].todo}
              </Link>
            </Box>
            <Box className="iconBox">
              <Link className={css`  
              font-family: lalezar;
               text-decoration: none;
               background-color: rgb(0, 153, 255);
               color: #000000;
                width: 150px;
                height: 50px;
                font-size: 25px;
                font-weight: bold;
                margin: 0 10px;
                padding: 10px;
                border-radius: 15px;
                display: flex;
                justify-content: center;
                align-items: center;
  
               `} to="exams">
                {translation[localeLanguage].exams}
              </Link>
            </Box>
            <Box className="iconBox">
              <Link className={css`  
              font-family: lalezar;
               text-decoration: none;
               background-color: rgb(0, 153, 255);
               color: #000000;
                width: 150px;
                height: 50px;
                font-size: 25px;
                font-weight: bold;
                margin: 0 10px;
                padding: 10px;
                border-radius: 15px;
                display: flex;
                justify-content: center;
                align-items: center;
  
               `} to="tools">
                {translation[localeLanguage].tools}
              </Link>
            </Box>
          </div>
          <div className="homeRows">
            <Box className="iconBox">
              <Link className={css`  
              font-family: lalezar;
               text-decoration: none;
               background-color: rgb(0, 153, 255);
               color: #000000;
                width: 150px;
                height: 50px;
                font-size: 25px;
                font-weight: bold;
                margin: 0 10px;
                padding: 10px;
                border-radius: 15px;
                display: flex;
                justify-content: center;
                align-items: center;
  
               `} to="notes">
                {translation[localeLanguage].notes}
              </Link>
            </Box>
            <Box className="iconBox">
              <Link className={css`  
              font-family: lalezar;
               text-decoration: none;
               background-color: rgb(0, 153, 255);
               color: #000000;
                width: 150px;
                height: 50px;
                font-size: 25px;
                font-weight: bold;
                margin: 0 10px;
                padding: 10px;
                border-radius: 15px;
                display: flex;
                justify-content: center;
                align-items: center;
  
               `} to="notes">
                {translation[localeLanguage].teachingMovies}
              </Link>
            </Box>
            <Box className="iconBox">
              <Link className={css`  
              font-family: lalezar;
               text-decoration: none;
               background-color: rgb(0, 153, 255);
               color: #000000;
                width: 150px;
                height: 50px;
                font-size: 25px;
                font-weight: bold;
                margin: 0 10px;
                padding: 10px;
                border-radius: 15px;
                display: flex;
                justify-content: center;
                align-items: center;
  
               `} to="notes">
                {translation[localeLanguage].books}
              </Link>
            </Box>
          </div>
          <div className="homeRows">
            <Box className="iconBox">
              <Link className={css`  
              font-family: lalezar;
               text-decoration: none;
               background-color: rgb(0, 153, 255);
               color: #000000;
                width: 150px;
                height: 50px;
                font-size: 25px;
                font-weight: bold;
                margin: 0 10px;
                padding: 10px;
                border-radius: 15px;
                display: flex;
                justify-content: center;
                align-items: center;
  
               `} to="calendar">
                {translation[localeLanguage].calendar}
              </Link>
            </Box>
            <Box className="iconBox">
              <Link className={css`  
              font-family: lalezar;
               text-decoration: none;
               background-color: rgb(0, 153, 255);
               color: #000000;
                width: 150px;
                height: 50px;
                font-size: 25px;
                font-weight: bold;
                margin: 0 10px;
                padding: 10px;
                border-radius: 15px;
                display: flex;
                justify-content: center;
                align-items: center;
  
               `} to="translator">
                {translation[localeLanguage].translator}
              </Link>
            </Box>
            <Box className="iconBox">
              <Link className={css`  
              font-family: lalezar;
               text-decoration: none;
               background-color: rgb(0, 153, 255);
               color: #000000;
                width: 150px;
                height: 50px;
                font-size: 25px;
                font-weight: bold;
                margin: 0 10px;
                padding: 10px;
                border-radius: 15px;
                display: flex;
                justify-content: center;
                align-items: center;
  
               `} to="about">
                {translation[localeLanguage].aboutUs}
              </Link>
            </Box>
          </div>
        </Box>
        <h2>
          {new Date().toLocaleString(localeTime, {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          })}
        </h2>
      </Box>
    </Box>
  );
}

export default Home;
