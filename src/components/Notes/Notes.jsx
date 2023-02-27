/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { css } from '@emotion/css';
import ReactQuillCustom from './ReactQuillCustom';
import translation from '../../utils/translation';

function Notes() {
  const [editorHtml, setEditorHtml] = useState('');
  const dispatch = useDispatch();
  const { notesList, localeLanguage } = useSelector((state) => state.data);

  const handleEditorChange = (html) => {
    setEditorHtml(html);
  };

  const handleAddNote = () => {
    const newNote = prompt(translation[localeLanguage].enterYourNoteName);
    if (newNote) {
      dispatch({
        type: 'ADD_NOTE',
        payload: {
          id: Math.floor(Math.random() * 1000),
          title: newNote,
          content: editorHtml,
        },
      });
    }
  };

  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
      `}
    >
      <ReactQuillCustom
        editorHtml={editorHtml}
        handleEditorChange={handleEditorChange}
      />
      <div
        className={css`
          margin-top: 5rem;
        `}
      >
        <button onClick={handleAddNote}>
          {translation[localeLanguage].addNote}
        </button>
      </div>
      <div
        className={css`
          display: flex;
          height: 5rem;
          overflow: auto;
          flex-direction: column;
        `}
      >
        {notesList.map((note, index) => (
          <div
            className={css`
              margin: 0.5rem;
              background-color: #8f94fb;
              &:hover {
                cursor: pointer;
              }
            `}
            onClick={() => setEditorHtml(note.content)}
            key={index}
          >
            {note.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notes;
