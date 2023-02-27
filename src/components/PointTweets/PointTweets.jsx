/* eslint-disable no-alert */
import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import React, { useRef, useEffect } from 'react';
import translation from '../../utils/translation';

function PointTweets() {
  const dispatch = useDispatch();
  const { tweetsList, localeLanguage } = useSelector((state) => state.data);
  const input = useRef();

  useEffect(() => {
    alert(
      translation[localeLanguage]
        .anyTextOutsideOfMathConceptsWillHaveLegalIssues,
    );
  }, []);

  const addTweet = (e) => {
    if (e.key === 'Enter') {
      dispatch({
        type: 'ADD_TWEET',
        payload: {
          id: Math.floor(Math.random() * 1000),
          text: e.target.value,
        },
      });
      e.target.value = '';
    }
  };

  return (
    <div>
      <TextField ref={input} onKeyDown={addTweet} />
      {tweetsList.map((tweet) => (
        <div key={tweet.id}>{tweet.text}</div>
      ))}
    </div>
  );
}

export default PointTweets;
