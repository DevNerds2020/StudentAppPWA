import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { TextField, Button, Box } from '@mui/material';
import { css } from '@emotion/css';
import translation from '../../../utils/translation';

function PolygonDiameters() {
  const [input, setInput] = useState('');
  const [diameters, setDiameters] = useState(0);
  const localeLanguage = useSelector((state) => state.data.localeLanguage);
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const computeDiameters = () => {
    const n = parseInt(input, 10);
    const diagonals = (n * (n - 3)) / 2;
    setDiameters(diagonals);
  };

  return (
    <Box
      className={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 2rem;
        width: 100%;
      `}
    >
      <TextField
        label={translation[localeLanguage].degree.enterTheNumberOfSides}
        value={input}
        onChange={handleInputChange}
        type="number"
      />
      <Button
        variant="contained"
        className={css`
          width: 300px;
          margin: 10px !important;
        `}
        onClick={computeDiameters}
      >
        {translation[localeLanguage].computeDiameters}
      </Button>
      <Box>
        {diameters !== 0 && (
          <>
            <span>
              {translation[localeLanguage].numberOfDiameters}
              {'  '}
            </span>
            <span>{diameters}</span>
          </>
        )}
      </Box>
    </Box>
  );
}

export default PolygonDiameters;
