/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import { TextField, Box } from '@mui/material';
import { css } from '@emotion/css';
import { useSelector } from 'react-redux';
import translation from '../../../utils/translation';

function PrimeNumber() {
  const [input, setInput] = useState('');
  const [isPrime, setIsPrime] = useState(false);
  const { localeLanguage } = useSelector((state) => state.data);
  const checkIsPrime = () => {
    const n = parseInt(input, 10);
    let isPrimeNumber = true;
    for (let i = 2; i < n; i += 1) {
      if (n % i === 0) {
        isPrimeNumber = false;
        break;
      }
    }
    setIsPrime(isPrimeNumber);
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };
  return (
    <Box
      className={css`
        margin: 2rem;
      `}
    >
      <TextField
        label={translation[localeLanguage].enterANumber}
        value={input}
        onChange={handleInputChange}
        onKeyDown={checkIsPrime}
        type="number"
      />
      <Box>
        {isPrime && (
          <span>
            {input} {translation[localeLanguage].isPrimeNumber}
          </span>
        )}
        {!isPrime && input !== '' && (
          <span>
            {input}
            {translation[localeLanguage].isNotPrimeNumber}
          </span>
        )}
      </Box>
    </Box>
  );
}

export default PrimeNumber;
