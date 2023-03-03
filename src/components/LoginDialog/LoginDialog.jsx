/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  Button,
  TextField,
} from '@mui/material';
import { css } from '@emotion/css';
import translation from '../../utils/translation';

const inputStyle = css`
  margin: 1rem !important;
`;

function LoginDialog(props) {
  const { open, closeDialog } = props;
  const localeLanguage = useSelector((state) => state.data.localeLanguage);

  return (
    <Dialog
      className={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        direction: ${localeLanguage === 'ar' ? 'rtl' : 'ltr'};
        text-align: ${localeLanguage === 'ar' ? 'right' : 'left'};
      `}
      open={open}
    >
      <DialogTitle>{translation[localeLanguage].login}</DialogTitle>
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
        <Button>{translation[localeLanguage].login}</Button>
      </DialogActions>
    </Dialog>
  );
}
export default LoginDialog;
