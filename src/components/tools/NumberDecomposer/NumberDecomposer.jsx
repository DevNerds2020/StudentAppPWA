/* eslint-disable react/button-has-type */
/* eslint-disable no-plusplus */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { TextField, Button, Box } from '@mui/material';
import { css } from '@emotion/css';
import translation from '../../../utils/translation';

function NumberDecomposer() {
  const [input, setInput] = useState('');
  const [factors, setFactors] = useState([]);
  const localeLanguage = useSelector((state) => state.data.localeLanguage);
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const decomposeNumber = () => {
    let number = parseInt(input, 10);
    const factorsArray = [];

    for (let i = 2; i <= number; i++) {
      while (number % i === 0) {
        factorsArray.push(i);
        number /= i;
      }
    }

    setFactors(factorsArray);
  };

  return (
    <Box
      className={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 2rem;
      `}
    >
      <TextField
        label={translation[localeLanguage].enterANumber}
        value={input}
        onChange={handleInputChange}
        type="number"
      />
      <Button
        className={css`
          width: 300px;
          margin: 10px !important;
          text-color: black;
        `}
        onClick={decomposeNumber}
        variant="contained"
      >
        {translation[localeLanguage].decomposition}
      </Button>
      <Box>
        {factors.map((factor, index) => (
          <span>
            {factor}
            {index === factors.length - 1 ? '' : '*'}
          </span>
        ))}
      </Box>
    </Box>
  );
}

export default NumberDecomposer;
