import { css } from '@emotion/css';
import React from 'react';

function MoviesPage() {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      `}
    >
      <iframe
        src="https://www.aparat.com/video/video/embed/videohash/VRh1t/vt/frame"
        allowFullScreen="true"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        title="آموزش کامل فصل هفتم ریاضی هفتم | توان و جذر"
        className={css`
          margin: 10px;
        `}
      />
      <iframe
        src="https://www.aparat.com/video/video/embed/videohash/H0tq5/vt/frame"
        allowFullScreen="true"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        title="آموزش کامل فصل ششم ریاضی هفتم | توان و جذر"
        className={css`
          margin: 10px;
        `}
      />
    </div>
  );
}

export default MoviesPage;
