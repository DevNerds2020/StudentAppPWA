import React from 'react';
import ReactQuill from 'react-quill';
import PropTypes from 'prop-types';
import { css } from '@emotion/css';
import 'react-quill/dist/quill.snow.css';

function ReactQuillCustom(props) {
  const { editorHtml, handleEditorChange } = props;
  return (
    <ReactQuill
      className={css`
        height: 200px;
        margin-bottom: 1rem;
      `}
      theme="snow"
      value={editorHtml}
      onChange={handleEditorChange}
    />
  );
}

export default ReactQuillCustom;

ReactQuillCustom.propTypes = {
  editorHtml: PropTypes.string.isRequired,
  handleEditorChange: PropTypes.func.isRequired,
};
