import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Box,
  Button,
} from '@mui/material';
import { css } from '@emotion/css';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import translation from '../../../utils/translation';

function ToolButton(props) {
  const { children, name } = props;
  const [openDialog, setOpenDialog] = useState(false);
  const { localeLanguage } = useSelector((state) => state.data);

  return (
    <>
      <Box
        onClick={() => {
          setOpenDialog(true);
        }}
        className={css`
          cursor: pointer;
          margin: 30px;
          padding: 3px;
          padding-left: -1;
          border-radius: 10px;
        `}
      >
        <div
          className={css`
            cursor: pointer;
            font-family: lalezar;
            text-decoration: none;
            background-color: #ffffff;
            color: #000000;
            width: 150px;
            height: 50px;
            font-size: 25px;
            font-weight: bold;
            margin: 0 10px;
            padding: 10px;
            border-radius: 15px;
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          {name}
        </div>
      </Box>
      <Dialog open={openDialog}>
        <DialogTitle
          className={css`
            background-color: #676cd0;
          `}
        >
          {name}
        </DialogTitle>

        <DialogContent
          className={css`
            background-color: #2868c1;
          `}
        >
          {children}
        </DialogContent>

        <DialogActions
          className={css`
            background-color: #676cd0;
          `}
        >
          <Button
            variant="contained"
            onClick={() => {
              setOpenDialog('');
            }}
            color="primary"
          >
            {translation[localeLanguage].close}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
ToolButton.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
};

export default ToolButton;
