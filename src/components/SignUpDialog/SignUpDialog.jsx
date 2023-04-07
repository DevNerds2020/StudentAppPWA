/* eslint-disable react/prop-types */
import React, { useRef } from 'react';
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
import url from '../../utils/backendConfig';

const inputStyle = css`
  margin: 1rem !important;
`;
function SignUpDialog(props) {
  const { open, closeDialog } = props;
  const localeLanguage = useSelector((state) => state.data.localeLanguage);
  const formRef = useRef({
    name: '',
    email: '',
    password: '',
  });

  const registerUser = async () => {
    const requestBody = {
      name: formRef.current.name,
      email: formRef.current.email,
      password: formRef.current.password,
    };
    const response = await fetch(`${url}/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // set Content-Type header to application/json
      },
      body: JSON.stringify(requestBody),
    });
    const data = await response.json();
    console.log(data);
  };

  const handleClick = () => {
    registerUser();
    closeDialog();
  };

  const handleChange = (e) => {
    formRef.current[e.target.name] = e.target.value;
  };

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
          onChange={handleChange}
        />
        <TextField
          className={inputStyle}
          label={translation[localeLanguage].email}
          type="email"
          name="email"
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
          {translation[localeLanguage].signUp}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
export default SignUpDialog;
