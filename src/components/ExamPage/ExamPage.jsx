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

  const chooseRandom = (array) => {
    const randomArray = [];
    while (randomArray.length < 10) {
      const randomIndex = Math.floor(Math.random() * array.length);
      if (!randomArray.includes(array[randomIndex])) {
        randomArray.push(array[randomIndex]);
      }
    }
    return randomArray;
  };

  // pick 10 random questions if there are more than 10 questions
  const pickedQuestions =
    questions.length > 10 ? chooseRandom(questions) : questions;

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
      const question = pickedQuestions.find(
        (targetQuestion) => targetQuestion.id === studentAnswer.questionId,
      );
      if (question?.correctAnswer === studentAnswer.answer) {
        correctAnswers += 1;
      }
    });
    // calculate the percentage of correct answers only two decimal places
    percentMarkRef.current =
      Math.round((correctAnswers / pickedQuestions.length) * 10000) / 100;
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
        flex-direction: row-reverse;
        background-color: #2868c1;
        width: 100%;
        max-height: 90vh;
        overflow: auto;
        @media (max-width: 768px) {
          transform: scale(0.7);
          padding: 20vh;
        }
        //transform the scale on small screens
      `}
    >
      <Box
        className={css`
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
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
          {pickedQuestions.map((question) => (
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
                    id="a"
                    value="a"
                    control={<Radio />}
                    label={question.answers.a}
                  />
                  <FormControlLabel
                    id={`b${question.id}`}
                    value="b"
                    control={<Radio />}
                    label={question.answers.b}
                  />
                  <FormControlLabel
                    id="c"
                    value="c"
                    control={<Radio />}
                    label={question.answers.c}
                  />
                  <FormControlLabel
                    id="d"
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
            position: fixed;
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
              <>
                <CircularProgressbar
                  id="percentMark"
                  value={percentMarkRef.current}
                  text={`${percentMarkRef.current}%`}
                  className={css`
                    margin-top: 3rem;
                    width: 5rem;
                    height: 5rem;
                  `}
                />
                <div id="mark">{percentMarkRef.current}</div>
              </>
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
              id="submitExamButton"
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
              id="startExamButton"
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
