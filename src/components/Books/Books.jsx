import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { css } from '@emotion/css';
import { Box, Typography } from '@mui/material';

function Books() {
  return (
    <div>
      <Box
        className={css`
          display: flex;
          flex-direction: column;
        `}
      >
        <h2
          className={css`
            margin-bottom: 20px;
          `}
        >
          books
        </h2>
        <List
          className={css`
            width: 40vh !important;
          `}
          sx={{ width: '100%', backgroundColor: '#2868c1' }}
        >
          <a href="./src/assets/pdf/riyazitakmili.pdf">
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
                <Avatar alt="book" src="./src/assets/pdf/riyazitakmili.png" />
              </ListItemAvatar>
              <Typography
                className={css`
                  color: #000;
                `}
              >
                ریاضی تکمیلی هفتم
              </Typography>
            </ListItem>
          </a>
          <a href="./src/assets/pdf/Reyazi8.pdf">
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
                <Avatar alt="book" src="./src/assets/pdf/riyazihashtom.jpg" />
              </ListItemAvatar>
              <Typography
                className={css`
                  color: #000;
                `}
              >
                ریاضی هشتم
              </Typography>
            </ListItem>
          </a>
          <a href="./src/assets/pdf/takmili8.pdf">
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
                <Avatar alt="book" src="./src/assets/pdf/riyazitakmili.png" />
              </ListItemAvatar>
              <Typography
                className={css`
                  color: #000;
                `}
              >
                ریاضی تکمیلی هشتم
              </Typography>
            </ListItem>
          </a>
          <a href="./src/assets/pdf/Reyazi9.pdf">
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
                <Avatar alt="book" src="./src/assets/pdf/riyazinohom.jpg" />
              </ListItemAvatar>
              <Typography
                className={css`
                  color: #000;
                `}
              >
                ریاضی نهم
              </Typography>
            </ListItem>
          </a>
          <a href="./src/assets/pdf/takmili9.pdf">
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
                <Avatar alt="book" src="./src/assets/pdf/riyazitakmili.png" />
              </ListItemAvatar>
              <Typography
                className={css`
                  color: #000;
                `}
              >
                ریاضی تکمیلی نهم
              </Typography>
            </ListItem>
          </a>
          <Divider variant="inset" component="li" />
        </List>
      </Box>
    </div>
  );
}
export default Books;
