/* eslint-disable react/jsx-wrap-multilines */
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { css } from '@emotion/css';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import exams from './exams';
import translation from '../../utils/translation';

export default function ExamsPage() {
  const { localeLanguage } = useSelector((state) => state.data);
  return (
    <Box
      className={css`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      `}
    >
      <h2
        className={css`
          margin-bottom: 20px;
        `}
      >
        {translation[localeLanguage].exams}
      </h2>
      <List
        className={css``}
        sx={{ width: '100%', maxWidth: 360, backgroundColor: '#2868c1' }}
      >
        {exams.map((exam) => (
          <Link to={`/exam/${exam.id}`} state={{ exam }}>
            <ListItem
              alignItems="center"
              className={css`
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                &:hover {
                  color: #393939;
                  background-color: #f0f8ff;
                  border-radius: 10px;
                  transition: 0.5s;
                }
              `}
            >
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                secondary={
                  <>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {exam.title}
                    </Typography>
                    <Box
                      className={css`
                        display: flex;
                        justify-content: space-center;
                        align-items: center;
                      `}
                    >
                      {`${exam.description}`}
                      <br />
                      {`time: ${exam.time}`}
                    </Box>
                  </>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </Link>
        ))}
      </List>
    </Box>
  );
}
