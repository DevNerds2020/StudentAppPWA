import { TextField } from '@mui/material';
import { css } from '@emotion/css';
import { useState } from 'react';
import { Button } from 'semantic-ui-react';

export default function PythagorasTriqangle() {
  const [hypotenuse, setHypotenuse] = useState();
  const [sideOne, setSideOne] = useState();
  const [sideTwo, setSideTwo] = useState();
  const [sideMustBe, setSideMustBe] = useState();

  const sideOneHandler = (event) => {
    if (String(event.target.value) === '') {
    }
    setSideOne(event.target.value);
  };

  const sideTwoHandler = (event) => {
    setSideTwo(event.target.value);
  };

  const hypotenuseHandler = (event) => {
    setHypotenuse(event.target.value);
  };

  const thirdSideHandler = () => {
    console.log(sideOne);
    if (
      (typeof hypotenuse !== 'undefined' &&
        typeof sideTwo !== 'undefined' &&
        typeof sideOne === 'undefined') ||
      (String(hypotenuse) !== '' &&
        String(sideTwo) !== '' &&
        String(sideOne) === '')
    ) {
      setSideMustBe(Math.sqrt(hypotenuse * hypotenuse - sideTwo * sideTwo));
    } else if (
      (typeof sideOne !== 'undefined' &&
        typeof sideTwo !== 'undefined' &&
        typeof hypotenuse === 'undefined') ||
      (String(sideOne) !== '' &&
        String(sideTwo) !== '' &&
        String(hypotenuse) === '')
    ) {
      console.log('hey');
      setSideMustBe(Math.sqrt(sideOne * sideOne + sideTwo * sideTwo));
    } else if (
      (typeof hypotenuse !== 'undefined' &&
        typeof sideOne !== 'undefined' &&
        typeof sideTwo === 'undefined') ||
      (String(hypotenuse) !== '' &&
        String(sideOne) !== '' &&
        String(sideTwo) === '')
    ) {
      setSideMustBe(Math.sqrt(hypotenuse * hypotenuse - sideOne * sideOne));
    } else {
      setSideMustBe('');
    }
  };

  return (
    <div
      className={css`
        display: flex;
        justify-content: center;
      `}
    >
      <div className={css`text-align:center;`}>
        <h3 >.اندازه اضلاع را وارد کنید</h3>
        <h5>(.برای ممیز از نقطه ( . ) استفاده کنید)</h5>

        <div
          className={css`
            display: flex;
            justify-content: space-between;
            margin: 15px;
          `}
        >
          <h4
            className={css`
              margin: 10px;
            `}
          >
            ضلع اول
          </h4>

          <TextField
            label="cm"
            onKeyDown={sideOneHandler}
            onChange={sideOneHandler}
            type="number"
          ></TextField>
        </div>
        <div
          className={css`
            display: flex;
            justify-content: space-between;
            margin: 15px;
          `}
        >
          <h4
            className={css`
              margin: 10px;
            `}
          >
            ضلع دوم
          </h4>

          <TextField
            label="cm"
            onChange={sideTwoHandler}
            type="number"
          ></TextField>
        </div>

        <div
          className={css`
            display: flex;
            justify-content: space-between;
            margin: 15px;
          `}
        >
          <h4
            className={css`
              margin: 10px;
            `}
          >
            وتر ضلع
          </h4>
          <TextField
            label="cm"
            type="number"
            onChange={hypotenuseHandler}
          ></TextField>
        </div>
      </div>
      <div
        className={css`
          display: flex;
          flex-direction: column;
          justify-content: space-around;
        `}
      >
        {hypotenuse * hypotenuse === sideOne * sideOne + sideTwo * sideTwo && (
          <h2
            className={css`
              color: #3aff04;
              t
            `}
          >
            مثلث فیثاغورث است
          </h2>
        )}
        <Button onClick={thirdSideHandler}>محاسبه ضلع سوم</Button>
        <h3>{sideMustBe}</h3>
      </div>
    </div>
  );
}
