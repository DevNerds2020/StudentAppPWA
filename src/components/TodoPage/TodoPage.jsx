import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, IconButton, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { css } from '@emotion/css';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';
import translation from '../../utils/translation';

function TodoPage() {
  const { todoList, localeLanguage } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const TextFieldRef = useRef(null);
  const [inputValue, setInputValue] = useState('');
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const addToDo = () => {
    if (inputValue === '') return;
    dispatch({
      type: 'ADD_TODO',
      payload: {
        id: todoList.length + 1,
        title: inputValue,
        isDone: false,
      },
    });
    setInputValue('');
    TextFieldRef.current.focus();
  };

  const onKeyDownHandler = (e) => {
    if (e.key === 'Enter') {
      addToDo();
    }
  };

  return (
    <Box
      className={css`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        min-width: 40rem;
        height: 100%;
        background-color: transparent;
      `}
    >
      <h2
        className={css`
          color: #ff1493;
          margin-bottom: 20px;
        `}
      >
        {translation[localeLanguage].todo}
      </h2>
      <Box
        className={css`
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: row;
          width: 100%;
          min-width: 30rem;
        `}
      >
        <TextField
          className={css`
            margin: 10px;
            color: #ff1493;
            height: 60px;
            min-width: 28rem;
          `}
          onKeyDown={onKeyDownHandler}
          variant="outlined"
          onChange={handleChange}
          value={inputValue}
          ref={TextFieldRef}
        />
        <IconButton
          className={css`
            margin: 10px;
            color: #ff1493;
            cursor: pointer;
            &:hover {
              color: #ff69b4;
              min-width: 2rem;
            }
          `}
          onClick={addToDo}
        >
          <AddIcon
            className={css`
              font-size: 20px;
              color: #ff1493;
              height: 60px;
            `}
          />
        </IconButton>
      </Box>
      <Box>
        {todoList.map((todo) => (
          <Box
            key={todo.id}
            className={css`
              display: flex;
              justify-content: space-between;
              align-items: center;
              flex-direction: row;
              width: 100%;
              margin: 10px;
              direction: ${localeLanguage === 'en' ? 'ltr' : 'rtl'};
            `}
          >
            <h3
              className={css`
                color: #ff1493;
                margin: 10px;
                text-decoration: ${todo.isDone ? 'line-through' : 'none'};
              `}
            >
              {todo.title}
            </h3>
            <IconButton
              className={css`
                margin: 10px;
                color: #ff1493;
                cursor: pointer;
                &:hover {
                  color: #ff69b4;
                }
              `}
              onClick={() => {
                dispatch({ type: 'TOGGLE_TODO', payload: { id: todo.id } });
              }}
            >
              {todo.isDone ? (
                <DoDisturbOnIcon
                  className={css`
                    font-size: 20px;
                    //yellow
                    color: #ff8c00;
                  `}
                />
              ) : (
                <CheckCircleIcon
                  className={css`
                    font-size: 20px;
                    color: #14ff9d;
                  `}
                />
              )}
            </IconButton>
            <IconButton
              className={css`
                margin: 10px;
                color: #ff1493;
                cursor: pointer;
                &:hover {
                  color: #ff69b4;
                }
              `}
              onClick={() => {
                dispatch({ type: 'DELETE_TODO', payload: { id: todo.id } });
              }}
            >
              <DeleteIcon
                className={css`
                  font-size: 20px;
                  color: #ff143f;
                  height: 60px;
                `}
              />
            </IconButton>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default TodoPage;
