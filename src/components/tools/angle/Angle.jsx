import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, TextField, Button, Typography } from '@mui/material';
import { css } from '@emotion/css';
import translation from '../../../utils/translation';

function Angle() {
  const input = useRef(null);
  const [result, setResult] = useState(0);
  const localeLanguage = useSelector((state) => state.data.localeLanguage);

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
        variant="outlined"
        type="number"
        inputRef={input}
        className={css`
          width: 300px;
          margin-bottom: 5rem;
        `}
      />
      <Button
        variant="contained"
        className={css`
          width: 300px;
          margin: 10px !important;
        `}
        onClick={() => {
          setResult(
            180 - ((input.current.value - 2) * 180) / input.current.value,
          );
        }}
      >
        {translation[localeLanguage].calculate}
      </Button>
      <Typography
        className={css`
          width: 300px;
          margin: 10px;
        `}
      >
        {translation[localeLanguage].degree.theDegreeOfEachSide}
        {result}
      </Typography>
    </Box>
  );
}

export default Angle;
