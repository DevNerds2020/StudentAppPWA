import React from 'react';
import { Box } from '@mui/material';
import exams from './exams';
import ExamPage from '../ExamPage/ExamPage';

function ExamsPage() {
  return (
    <Box>
      {exams.map((exam) => (
        <Box key={exam.id}>
          <Box>{exam.name}</Box>
          <Box>{exam.description}</Box>
          <Box>{exam.date}</Box>
          <ExamPage time={20} />
        </Box>
      ))}
    </Box>
  );
}

export default ExamsPage;
