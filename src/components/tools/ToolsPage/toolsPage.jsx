import {
  Dialog,
  DialogContentText,
  DialogTitle,
  DialogActions,
  DialogContent,
} from '@mui/material';
import { Box, Link, Button } from '@mui/material';
import { css } from '@emotion/css';
import translation from '../../../utils/translation';
import { useSelector } from 'react-redux';
import { useState } from 'react';

import Calculator from '../calculator/calculator';
import Fibonacci from '../fibonacci/fibonacci';

export default function ToolsPage() {
  const { localeLanguage } = useSelector((state) => state.data);

  const [openDialog, setOpenDialog] = useState('');
  return (
    <>
      <div
        className={css`
          display: flex;
          justify-content: space-around;
          margin-top: 100px;
        `}
      >
        <Box
          className={css`
            display: flex;
            background-color: #2868c1;
            width: 70%;
            justify-content: space-around;
          `}
        >
          <div>
            <Box
              onClick={() => {
                setOpenDialog('calculator');
              }}
              className={css`
                cursor: pointer;
                margin: 30px;
                padding: 3px;
                padding-left: -1;
                border-radius: 10px;
              `}
            >
              <Link
                className={css`
                cursor: pointer;
                font-family: lalezar;
                background-color: rgb(0, 153, 255);
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
                t
              `}
                to="todo"
              >
                {translation[localeLanguage].calculator}
              </Link>
            </Box>

            <Box
              className={css`
                cursor: pointer;
                margin: 30px;
                padding: 3px;
                padding-left: -1;
                border-radius: 10px;
              `}
            >
              <Link
                className={css`
                  cursor: pointer;
                  font-family: lalezar;
                  text-decoration: none;
                  background-color: rgb(0, 153, 255);
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
                to="exams"
              >
                {translation[localeLanguage].primeNumbersWithCounter}
              </Link>
            </Box>
            <Box
              onClick={() => {
                setOpenDialog('fibonacci');
              }}
              className={css`
                cursor: pointer;
                margin: 30px;
                padding: 3px;
                padding-left: -1;
                border-radius: 10px;
              `}
            >
              <Link
                className={css`
                  cursor: pointer;
                  font-family: lalezar;
                  text-decoration: none;
                  background-color: rgb(0, 153, 255);
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
                to="tools"
              >
                {translation[localeLanguage].fibonacci}
              </Link>
            </Box>
          </div>
          <div>
            <Box
              className={css`
                cursor: pointer;
                margin: 30px;
                padding: 3px;
                padding-left: -1;
                border-radius: 10px;
              `}
            >
              <Link
                className={css`
                  cursor: pointer;
                  font-family: lalezar;
                  text-decoration: none;
                  background-color: rgb(0, 153, 255);
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
                to="notes"
              >
                {translation[localeLanguage].angle}
              </Link>
            </Box>
            <Box
              className={css`
                cursor: pointer;
                margin: 30px;
                padding: 3px;
                padding-left: -1;
                border-radius: 10px;
              `}
            >
              <Link
                className={css`
                  cursor: pointer;
                  font-family: lalezar;
                  text-decoration: none;
                  background-color: rgb(0, 153, 255);
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
                to="notes"
              >
                {translation[localeLanguage].khayyamTriangle}
              </Link>
            </Box>
            <Box
              className={css`
                cursor: pointer;
                margin: 30px;
                padding: 3px;
                padding-left: -1;
                border-radius: 10px;
              `}
            >
              <Link
                className={css`
                  cursor: pointer;
                  font-family: lalezar;
                  text-decoration: none;
                  background-color: rgb(0, 153, 255);
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
                to="notes"
              >
                {translation[localeLanguage].numberOfDiameters}
              </Link>
            </Box>
          </div>
          <div>
            <Box
              className={css`
                cursor: pointer;
                margin: 30px;
                padding: 3px;
                padding-left: -1;
                border-radius: 10px;
              `}
            >
              <Link
                className={css`
                  cursor: pointer;
                  font-family: lalezar;
                  text-decoration: none;
                  background-color: rgb(0, 153, 255);
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
                to="calendar"
              >
                {translation[localeLanguage].pythagoras}
              </Link>
            </Box>
            <Box
              className={css`
                cursor: pointer;
                margin: 30px;
                padding: 3px;
                padding-left: -1;
                border-radius: 10px;
              `}
            >
              <Link
                className={css`
                  cursor: pointer;
                  font-family: lalezar;
                  text-decoration: none;
                  background-color: rgb(0, 153, 255);
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
                to="translator"
              >
                {translation[localeLanguage].potentialDensity}
              </Link>
            </Box>
            <Box
              className={css`
                cursor: pointer;
                margin: 30px;
                padding: 3px;
                padding-left: -1;
                border-radius: 10px;
              `}
            >
              <Link
                className={css`
                  cursor: pointer;
                  font-family: lalezar;
                  text-decoration: none;
                  background-color: rgb(0, 153, 255);
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
                to="about"
              >
                {translation[localeLanguage].unitConversion}
              </Link>
            </Box>
          </div>
        </Box>
      </div>

      {/* ----------------calculator dialog------------------ */}
      <Dialog
        className={css`
          border-radius: 15px;
        `}
        open={openDialog === 'calculator'}
      >
        <DialogTitle
          className={css`
            background-color: #676cd0;
          `}
        >
          {translation[localeLanguage].calculator}
        </DialogTitle>

        <DialogContent
          className={css`
            background-color: black;
          `}
        >
          <Calculator />
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

      {/* -------------fibonacci dialoh------------ */}

      <Dialog open={openDialog === 'fibonacci'}>
        <DialogTitle
          className={css`
            background-color: #676cd0;
          `}
        >
          {translation[localeLanguage].calculator}
        </DialogTitle>

        <DialogContent
          className={css`
            background-color: rgb(59, 59, 59);
          `}
        >
          <Fibonacci />
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
