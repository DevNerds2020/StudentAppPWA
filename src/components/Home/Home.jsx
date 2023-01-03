import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button, Menu, MenuItem } from '@mui/material';
import Fade from '@mui/material/Fade';
import { Link } from 'react-router-dom';
import { css } from '@emotion/css';
import translation from '../../utils/translation';

const LinkStyle = css`
  text-decoration: none;
  //pink color
  color: #ff1493;
  //dark blue color
  width: 150px;
  height: 50px;
  font-size: 25px;
  font-weight: bold;
  margin: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    color: #ff69b4;
    background-color: #f0f8ff;
    border-radius: 10px;
    transition: 0.5s;
    scale: 1.1;
  }
`;
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

        <Link className={LinkStyle} to="todo">
          {translation[localeLanguage].todo}
        </Link>
        <Link className={LinkStyle} to="exams">
          {translation[localeLanguage].exams}
        </Link>
        <Link className={LinkStyle} to="tools">
          {translation[localeLanguage].tools}
        </Link>
        <Link className={LinkStyle} to="notes">
          {translation[localeLanguage].notes}
        </Link>
        <Link className={LinkStyle} to="notes">
          {translation[localeLanguage].teachingMovies}
        </Link>
        <Link className={LinkStyle} to="notes">
          {translation[localeLanguage].books}
        </Link>
      </Box>
      <Button variant="contained" onClick={openMenu}>
        {localeLanguage}
      </Button>
    </Box>
  );
}

export default Home;
