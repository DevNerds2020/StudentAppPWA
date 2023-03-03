/* eslint-disable react/prop-types */
import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  Button,
  TextField,
} from '@mui/material';
import { css } from '@emotion/css';
import { useSelector } from 'react-redux';
import translation from '../../utils/translation';

const inputStyle = css`
  margin: 1rem !important;
`;

function SignUpDialog(props) {
  const { open, closeDialog } = props;
  const localeLanguage = useSelector((state) => state.data.localeLanguage);

  return (
    <Dialog open={open}>
      <DialogTitle>{translation[localeLanguage].signUp}</DialogTitle>
      <DialogContent
        className={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        `}
      >
        <TextField
          className={inputStyle}
          label={translation[localeLanguage].name}
          type="text"
          name="name"
        />
        <TextField
          className={inputStyle}
          label={translation[localeLanguage].email}
          type="email"
          name="email"
        />
        <TextField
          className={inputStyle}
          label={translation[localeLanguage].password}
          type="password"
          name="password"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDialog}>
          {translation[localeLanguage].cancel}
        </Button>
        <Button>{translation[localeLanguage].signUp}</Button>
      </DialogActions>
    </Dialog>
  );
}
export default SignUpDialog;
