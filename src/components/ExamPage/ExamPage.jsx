/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';

function ExamPage(props) {
  const { name, description, time, questions } = props;
  const [timer, setTimer] = React.useState(time);
  const [isExamOver, setIsExamOver] = React.useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return <div>{timer}</div>;
}

export default ExamPage;
