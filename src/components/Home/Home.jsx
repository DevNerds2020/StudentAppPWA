import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button, Menu, MenuItem } from '@mui/material';
import Fade from '@mui/material/Fade';
import { Link } from 'react-router-dom';
import { css } from '@emotion/css';
import translation from '../../utils/translation';
import "./Home.css"

function Home() {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const { localeLanguage } = useSelector((state) => state.data);

  const open = Boolean(anchorEl);
  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeLanguage = (newLanguage) => {
    dispatch({ type: 'CHANGE_LOCALE_LANGUAGE', payload: { localeLanguage: newLanguage } });
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
        <Box className='homeAppContainer'>
          <div className='homeRows'>
          <Box className='iconBox'>
            <Link className="LinkStyle" to="todo">
              {translation[localeLanguage].todo}
            </Link>
          </Box>
          <Box className='iconBox'>
            <Link className="LinkStyle" to="exams">
              {translation[localeLanguage].exams}
            </Link>
          </Box>
          <Box className='iconBox'>
            <Link className="LinkStyle" to="tools">
              {translation[localeLanguage].tools}
            </Link>
          </Box>
          </div>
          <div className='homeRows'>
          <Box className='iconBox'>

            <Link className="LinkStyle" to="notes">
              {translation[localeLanguage].notes}
            </Link>
          </Box>
          <Box className='iconBox'>

            <Link className="LinkStyle" to="notes">
              {translation[localeLanguage].teachingMovies}
            </Link>
          </Box>
          <Box className='iconBox'>

            <Link className="LinkStyle" to="notes">
              {translation[localeLanguage].books}
            </Link>
          </Box>
          </div>

        </Box>
      </Box>

    </Box>
  );
}

export default Home;
