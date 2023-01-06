/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  List,
  ListItem,
  Box,
  Card,
  FormControl,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Radio,
} from '@mui/material';
import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { css } from '@emotion/css';
import { CircularProgressbar } from 'react-circular-progressbar';
import translation from '../../utils/translation';
import 'react-circular-progressbar/dist/styles.css';

function ExamPage() {
  const location = useLocation();
  const { exam } = location.state;
  const { title, description, time, questions } = exam;
  const [timer, setTimer] = useState(time);
  const [isExamOver, setIsExamOver] = useState(false);
  const [isExamStarted, setIsExamStarted] = useState(false);
  const { localeLanguage } = useSelector((state) => state.data);
  const percentMarkRef = useRef(0);
  const studentAnswersRef = useRef([]);
  const rowDirection = localeLanguage === 'en' ? 'row' : 'row-reverse';

  useEffect(() => {
    const interval = setInterval(() => {
      if (isExamStarted && timer > 0 && !isExamOver) {
        setTimer((prevTimer) => prevTimer - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isExamStarted]);

  useEffect(() => {
    if (timer === 0) {
      setIsExamOver(true);
      setIsExamStarted(false);
    }
  }, [timer]);

  const checkAnswers = () => {
    let correctAnswers = 0;
    studentAnswersRef.current.forEach((studentAnswer) => {
      const question = questions.find(
        (targetQuestion) => targetQuestion.id === studentAnswer.questionId,
      );
      if (question.correctAnswer === studentAnswer.answer) {
        correctAnswers += 1;
      }
    });
    // calculate the percentage of correct answers only two decimal places
    percentMarkRef.current =
      Math.round((correctAnswers / questions.length) * 10000) / 100;
  };

  useEffect(() => {
    if (isExamOver) {
      checkAnswers();
    }
  }, [isExamOver]);
  const handleChange = (event, questionId) => {
    // if question is already answered then update the answer
    const questionIndex = studentAnswersRef.current.findIndex(
      (studentAnswer) => studentAnswer.questionId === questionId,
    );
    if (questionIndex !== -1) {
      studentAnswersRef.current[questionIndex].answer = event.target.value;
      return;
    }
    // if question is not answered then add the answer
    studentAnswersRef.current.push({ questionId, answer: event.target.value });
  };

  return (
    <Box
      className={css`
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: row-reverse;
        width: 100%;
        //transform the scale on small screens
        @media (max-width: 768px) {
          transform: scale(0.4);
        }
      `}
    >
      <Box
        className={css`
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          background-color: #2868c1;
          //if exam is not started then background is fully blurred
          //if exam is started then background is not blurred
          filter: blur(${isExamStarted ? '0px' : '5px'});
        `}
      >
        <List
          className={css`
          direction: ${localeLanguage} === 'en' ? ltr : rtl;
        `}
          sx={{
            width: '100%',
            minHeight: '30rem',
            minWidth: '40rem',
            backgroundColor: '#2868c1',
          }}
        >
          {questions.map((question) => (
            <ListItem
              className={css`
                display: flex;
                flex-direction: ${rowDirection};
              `}
            >
              <FormControl dir={localeLanguage === 'en' ? 'ltr' : 'rtl'}>
                <FormLabel>
                  {`${question.description}-${question.id}`}
                </FormLabel>
                <RadioGroup
                  name="radio-buttons-group"
                  onChange={(event) => handleChange(event, question.id)}
                >
                  <FormControlLabel
                    value="a"
                    control={<Radio />}
                    label={question.answers.a}
                  />
                  <FormControlLabel
                    value="b"
                    control={<Radio />}
                    label={question.answers.b}
                  />
                  <FormControlLabel
                    value="c"
                    control={<Radio />}
                    label={question.answers.c}
                  />
                  <FormControlLabel
                    value="d"
                    control={<Radio />}
                    label={question.answers.d}
                  />
                </RadioGroup>
              </FormControl>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box>
        <Box
          className={css`
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: #2868c1;
            min-width: 18rem;
            min-height: 22rem;
          `}
        >
          <Box
            className={css`
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              margin-top: 20px;
            `}
          >
            <Box>{title}</Box>
            <Box>{description}</Box>
            <Box>{`${translation[localeLanguage].timeLeft}: ${timer}`}</Box>
            {isExamOver && (
              <CircularProgressbar
                value={percentMarkRef.current}
                text={`${percentMarkRef.current}%`}
                className={css`
                  margin-top: 3rem;
                  width: 5rem;
                  height: 5rem;
                `}
              />
            )}
          </Box>
          <Box
            className={css`
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: row;
              //put it in button of parent
              margin-top: 10rem;
            `}
          >
            <Button
              className={css`
                //red
                background-color: #f44336;
                color: white;
                margin: 10px;
              `}
              onClick={() => {
                setIsExamOver(true);
              }}
            >
              {translation[localeLanguage].endExam}
            </Button>
            <Button
              className={css`
                //green
                background-color: #4caf50;
                color: white;
                margin: 10px;
              `}
              onClick={() => {
                setIsExamStarted(true);
              }}
            >
              {translation[localeLanguage].startExam}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ExamPage;
