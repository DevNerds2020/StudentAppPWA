/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import {
  DialogTitle,
  Dialog,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import { css } from '@emotion/css';
import translation from '../../utils/translation';

function InfoDialog(props) {
  const { open, closeDialog, title, isContact } = props;
  const localeLanguage = useSelector((state) => state.data.localeLanguage);
  return (
    <Dialog
      open={open}
      className={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        direction: ${localeLanguage !== 'en' ? 'rtl !important' : 'ltr'};
      `}
    >
      <DialogTitle
        className={css`
          background-color: #8f94fb;
        `}
      >
        {title}
      </DialogTitle>
      <DialogContent
        className={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: #8f94fb;
          width: 30rem;
        `}
      >
        {!isContact && (
          <p>
            بهترین دوستتان در دبیرستان اپلیکیشنی جامع متشکل از ابزار های
            محاسباتی ، درسنامه ها و نمونه سوالات مناسب مقطع تحصیلی متوسطه اول
            است. در بخش ابزار ها شما به ابزار های محاسباتی ریاضی مختلفی نظیر
            تبدیل واحد ها ، غربال اعداد و.... دسترسی دارید. بخش درسنامه ها و
            نمونه سوالات مخزنی از درسنامه ها و نمونه سوالات با کیفیت هست که در
            تلاشیم تا هر روز این نرم افزار رشد کند و امکانات بیشتری را برای دانش
            آموزان فراهم کنیم تیم بهترین دوستتان در دبیرستان تیمی متشکل از دانش
            آموزان دبیرستان فرزانگان ۳( مرکز ۳ استعداد های درخشان) است که همواره
            سعی بر بهتر شدن این نرم افزار دارند. تیمی خلاق و پیشرو!
            <br />
            برنامه نویسان: آیلا الستی ، مهدیه امیرآبادی
            <br />
            طراحی گرافیک: آیلا الستی ، مهدیه امیرآبادی
          </p>
        )}
        {isContact && (
          <p>
            ارتباط با ما : آیدی شاد: Mahdiye_a1515 شماره تماس: 09014665799 و
            09155119811
          </p>
        )}
      </DialogContent>
      <DialogActions
        className={css`
          background-color: #8f94fb;
        `}
      >
        <Button variant="contained" onClick={closeDialog}>
          {translation[localeLanguage].ok}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
export default InfoDialog;
