import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button, IconButton, TextField } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { css } from '@emotion/css';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';
import translation from '../../utils/translation';
import './TodoPage.css';

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
        id: Math.floor(Math.random() * 1000),
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

  const onEditButtonClick = (taskId) => {
    dispatch({ type: 'CHANGE_TODO_ITEM_TO_EDIT_MODE', payload: { taskId } });
  };

  const deleteHandler = (taskId) => {
    dispatch({ type: 'DELETE_TODO', payload: { taskId } });
  };

  const handleEditTask = (event, taskId) => {
    dispatch({
      type: 'EDIT_TODO',
      payload: { value: event.target.value, taskId },
    });
  };

  return (
    <Box className="allContainer">
      <div style={{ display: 'flex' }}>
        <Box className="addTodoBox">
          <TextField
            className="textField"
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
            <CheckIcon
              className={css`
                font-size: 20px;
                color: #ff1493;
                height: 60px;
              `}
            />
          </IconButton>
        </Box>

        <h2 className="title">{translation[localeLanguage].todo}</h2>
      </div>
      <Box className="taskHolder">
        {todoList.map((todo) => (
          <Box key={todo.id} className="eachTask">
            {!todo?.editMode ? (
              <h3
                className={css`
                  overflow-wrap: break-word;
                  color: #00000;
                  margin: 10px;
                  max-width: 23rem;
                  text-decoration: ${todo.isDone ? 'line-through' : 'none'};
                `}
              >
                {todo.title}
              </h3>
            ) : (
              <TextField
                onChange={(event) => handleEditTask(event, todo.id)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    onEditButtonClick(todo.id);
                  }
                }}
                variant="standard"
                defaultValue={todo.title ?? ''}
              />
            )}
            <div>
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
                  const deleteId = todo.id;
                  deleteHandler(deleteId);
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
              <IconButton>
                <Button
                  variant="outlined"
                  color="inherit"
                  onClick={() => onEditButtonClick(todo.id)}
                >
                  {todo?.editMode
                    ? translation[localeLanguage].view
                    : translation[localeLanguage].edit}
                </Button>
              </IconButton>
            </div>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default TodoPage;
