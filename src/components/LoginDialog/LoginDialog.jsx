/* eslint-disable react/prop-types */
import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
import url from '../../utils/backendConfig';

const inputStyle = css`
  margin: 1rem !important;
`;

function LoginDialog(props) {
  const { open, closeDialog } = props;
  const dispatch = useDispatch();
  const formRef = useRef({
    username: '',
    password: '',
  });
  const localeLanguage = useSelector((state) => state.data.localeLanguage);

  const handleChange = (e) => {
    formRef.current[e.target.name] = e.target.value;
  };

  const loginUser = async () => {
    const response = await fetch(`${url}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // set Content-Type header to application/json
      },
      body: JSON.stringify(formRef.current),
    });
    const data = await response.json();
    if (data[0].id) {
      dispatch({
        type: 'SET_USER',
        payload: data[0],
      });
    }
  };

  const handleClick = () => {
    loginUser();
    closeDialog();
  };

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
          label={translation[localeLanguage].username}
          type="username"
          name="username"
          onChange={handleChange}
        />
        <TextField
          className={inputStyle}
          label={translation[localeLanguage].password}
          type="password"
          name="password"
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDialog}>
          {translation[localeLanguage].cancel}
        </Button>
        <Button onClick={handleClick}>
          {translation[localeLanguage].login}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
export default LoginDialog;
