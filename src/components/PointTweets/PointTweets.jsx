/* eslint-disable no-alert */
import { Box, MenuItem, TextField, Select } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import React, { useRef, useEffect, useState } from 'react';
import { css } from '@emotion/css';
import translation from '../../utils/translation';

function PointTweets() {
  const dispatch = useDispatch();
  const { tweetsList, localeLanguage } = useSelector((state) => state.data);
  const [grade, setGrade] = useState('7');
  const [tweets, setTweets] = useState(tweetsList);
  const [messageShown, setMessageShown] = useState(false);
  const input = useRef();

  useEffect(() => {
    if (messageShown) return;
    alert(
      translation[localeLanguage]
        .anyTextOutsideOfMathConceptsWillHaveLegalIssues,
    );
    setMessageShown(true);
  }, []);

  useEffect(() => {
    const filteredTweets = tweetsList.filter((tweet) => tweet.grade === grade);
    setTweets(filteredTweets);
  }, [grade, tweetsList]);

  const addTweet = (e) => {
    if (e.key === 'Enter') {
      dispatch({
        type: 'ADD_TWEET',
        payload: {
          id: Math.floor(Math.random() * 1000),
          text: e.target.value,
          grade,
        },
      });
      e.target.value = '';
    }
  };

  return (
    <div>
      <Box>
        <TextField
          label={translation[localeLanguage].tweetText}
          ref={input}
          onKeyDown={addTweet}
          sx={{
            width: '50vh',
            textAlign: 'center',
          }}
        />
        <Select
          value={grade}
          label={translation[localeLanguage].grade}
          sx={{
            width: '20vh',
            marginLeft: '10px',
          }}
          onChange={(e) => {
            setGrade(e.target.value);
          }}
        >
          <MenuItem value="7">{translation[localeLanguage].grade7}</MenuItem>
          <MenuItem value="8">{translation[localeLanguage].grade8}</MenuItem>
          <MenuItem value="9">{translation[localeLanguage].grade9}</MenuItem>
        </Select>
      </Box>
      {tweets.map((tweet) => (
        <div
          className={css`
            margin-top: 10px;
            margin-bottom: 10px;
            padding: 10px;
            background-color: #0c1f3c;
            color: white;
            border-radius: 10px;
          `}
          key={tweet.id}
        >
          {tweet.text}
        </div>
      ))}
    </div>
  );
}

export default PointTweets;
