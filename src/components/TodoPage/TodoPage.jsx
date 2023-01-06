import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button, IconButton, TextField } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { css } from '@emotion/css';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';
import translation from '../../utils/translation';
import "./TodoPage.css"


function TodoPage() {
  const { todoList, localeLanguage } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const TextFieldRef = useRef(null);
  const [inputValue, setInputValue] = useState('');
  const [editsaver, setEditsaver] = useState(false);
  const [editid, setEditid] = useState(false);


  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const addToDo = () => {
    if (editsaver == false) {
      if (inputValue === '') return;
      dispatch({
        type: 'ADD_TODO',
        payload: {
          id: todoList.length + 1,
          title: inputValue,
          isDone: false,
        },
      });
      console.log(editsaver)
      setInputValue('');
      TextFieldRef.current.focus();
    } else {
      dispatch({ type: 'EDIT_TASK', payload: editid, payloadText: inputValue })
      setInputValue('');
      TextFieldRef.current.focus();
      setEditsaver(false)
    }
  };

  const onKeyDownHandler = (e) => {
    if (e.key === 'Enter') {
      addToDo();
    }
  };
  //-----------edit---------


  const EditHandler = (taskid) => {

    setEditsaver(true)
    const a = todoList.filter(todoList => {
      return todoList.id === taskid
    })
    setInputValue(a[0].title)
    setEditid(taskid)
  }


  //---------------delete-------------

  const deleteHandler = (deleteId) => {

    const firstHalf = todoList.slice(0, deleteId - 1)
    const secoundHalf = todoList.slice(deleteId)
    secoundHalf.forEach(element => {
      element.id = element.id - 1
    });

    console.log(firstHalf)
    console.log(secoundHalf)

    const deleteDone = firstHalf.concat(secoundHalf)

    dispatch({ type: 'DELETE_TODO', payload: { deleteDone } });
  }



  return (
    <>
      <Box
        className="allContainer"
      >
        <div style={{ display: "flex" }}>
          <Box
            className="addTodoBox"
          >
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

          <h2
            className={css`
          color: #ff1493;
          margin-top: 20px;
          margin-left:20px
        `}
          >
            {translation[localeLanguage].todo}
          </h2>
        </div>
        <Box className='taskHolder'>
          {todoList.map((todo) => (
            <Box
              key={todo.id}
              className="eachTask"
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
                    const deleteId = todo.id
                    deleteHandler(deleteId)
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
                    variant='outlined' color='inherit'
                    onClick={() => {
                      const taskid = todo.id
                      EditHandler(taskid)
                      // ;
                    }} >Edit</Button>
                </IconButton>
              </div>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}

export default TodoPage;
