import React, { useState } from 'react';
import RichTextEditor from 'react-rte';
import { css } from '@emotion/css';

function Notes() {
  const [editorState, setEditorState] = useState(
    RichTextEditor.createEmptyValue(),
  );
  return (
    <div
      className={css`
        height: 100%;
      `}
    >
      <RichTextEditor
        editorClassName="editor"
        editorStyle={{
          fontSize: '25px',
          innerHeight: '100%',
          outerHeight: '100%',
        }}
        value={editorState}
        onChange={(x) => setEditorState(x)}
      />
    </div>
  );
}

export default Notes;
