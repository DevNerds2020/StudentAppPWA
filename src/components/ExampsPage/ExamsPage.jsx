import React from 'react';
import { Box } from '@mui/material';
import exams from './exams';

function ExamsPage() {
  return (
    <Box>
      {exams.map((exam) => (
        <Box key={exam.id}>
          <Box>{exam.name}</Box>
          <Box>{exam.description}</Box>
          <Box>{exam.date}</Box>
        </Box>
      ))}
    </Box>
  );
}

export default ExamsPage;
