import { TextField, Button } from '@mui/material';
import { css } from '@emotion/css';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import translation from '../../../utils/translation';

export default function Fibonacci() {
  const { localeLanguage } = useSelector((state) => state.data);

  const [givenNumber, setGivenNumber] = useState();
  const [results, setResults] = useState();

  const calculate = () => {
    console.log('Fibonacci Series:');
    let n1 = 0,
      n2 = 1,
      nextTerm;

    for (let i = 1; i <= givenNumber; i++) {
      nextTerm = n1 + n2;
      n1 = n2;
      n2 = nextTerm;
      setResults(nextTerm);
    }
  };

  const enterHandler = (e) => {
    if (e.key === 'Enter') {
      calculate();
    }
  };

  return (
    <div>
      <h3
        className={css`
          margin: 30px;
        `}
      >
        {translation[localeLanguage].whichFibonnaciNumber}
      </h3>
      <div
        className={css`
          display: flex;
          justify-content: space-around;
        `}
      >
        <TextField
          onKeyDown={enterHandler}
          onChange={(e) => {
            setGivenNumber(e.target.value);
          }}
          type="number"
          color="primary"
          variant="outlined"
        />

        <Button onClick={calculate} variant="contained">
          {translation[localeLanguage].calculate}
        </Button>
      </div>
      <h1>{results}</h1>
    </div>
  );
}
