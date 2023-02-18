/* eslint-disable no-plusplus */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { TextField, Button, Box } from '@mui/material';
import { css } from '@emotion/css';
import translation from '../../../utils/translation';

function KhayyamTriangleRow() {
  const [input, setInput] = useState('');
  const [row, setRow] = useState([]);
  const localeLanguage = useSelector((state) => state.data.localeLanguage);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const generateRow = () => {
    const n = parseInt(input, 10);
    const rowArray = [1];

    for (let i = 1; i <= n; i++) {
      const nextValue = Math.floor((rowArray[i - 1] * (n - i + 1)) / i);
      rowArray.push(nextValue);
    }

    setRow(rowArray);
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
        label={translation[localeLanguage].enterRowNumber}
        value={input}
        onChange={handleInputChange}
        type="number"
      />
      <Button
        className={css`
          width: 300px;
          margin: 10px !important;
        `}
        variant="contained"
        onClick={generateRow}
      >
        {translation[localeLanguage].generateRow}
      </Button>
      <Box>
        {row.map((value) => (
          <>
            <span>{value}</span>
            <span>,</span>
          </>
        ))}
      </Box>
    </Box>
  );
}

export default KhayyamTriangleRow;
