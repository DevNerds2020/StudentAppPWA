import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button, Menu, MenuItem } from '@mui/material';
import Fade from '@mui/material/Fade';
import { css } from '@emotion/css';
import translation from '../../utils/translation';
import './Home.css';
import CustomButton from './CustomButton';
import Navbar from '../Navbar/Navbar';

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
    <>
      <Navbar />

      <Box
        className={css`
          width: 100%;
          height: 100%;
          margin-top: 10rem;
        `}
      >
        <Button variant="contained" onClick={openMenu} size="small">
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
              font-size: 1rem;
              font-weight: bold;
              text-align: center;
              margin-bottom: 1.5rem;
            `}
          >
            {translation[localeLanguage].highSchoolBody}
          </h2>
          <h2>
            {new Date().toLocaleString(localeTime, {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
            })}
          </h2>
          <Box className="homeAppContainer">
            <div className="homeRows">
              <CustomButton
                buttonName={translation[localeLanguage].todo}
                link="todo"
              />
              <CustomButton
                buttonName={translation[localeLanguage].tools}
                link="tools"
              />
              <CustomButton
                buttonName={translation[localeLanguage].exams}
                link="exams"
              />
            </div>
            <div className="homeRows">
              <CustomButton
                buttonName={translation[localeLanguage].notes}
                link="notes"
              />
              <CustomButton
                buttonName={translation[localeLanguage].teachingMovies}
                link="teachingMovies"
              />
              <CustomButton
                buttonName={`*(vip)*${translation[localeLanguage].books}`}
                link="books"
              />
            </div>
            <div className="homeRows">
              <CustomButton
                buttonName={`*(vip)*${translation[localeLanguage].calendar}`}
                link="calendar"
              />
              <CustomButton
                buttonName={translation[localeLanguage].translator}
                link="translator"
              />
              <CustomButton
                buttonName={translation[localeLanguage].mathTweets}
                link="mathtweets"
              />
            </div>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Home;
