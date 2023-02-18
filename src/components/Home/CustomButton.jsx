/* eslint-disable react/prop-types */
import React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { css } from '@emotion/css';

import './Home.css';

function CustomButton(props) {
  const { buttonName, link } = props;

  return (
    <Box className="iconBox">
      <Link
        className={css`
          font-family: lalezar;
          text-decoration: none;
          background-color: #8f94fb;
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
        `}
        to={link}
      >
        {buttonName}
      </Link>
    </Box>
  );
}

export default CustomButton;
