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
    if(event.keyCode === 46){
      setSideOne(null)
    }
    setSideOne(event.target.value);  
  };

  const sideTwoHandler = (event) => {
    if(event.keyCode === 46){
      setSideOne(null)
    }
    setSideTwo(event.target.value);
  };

  const hypotenuseHandler = (event) => {
    if(event.keyCode === 46){
      setSideOne(null)
    }
    setHypotenuse(event.target.value);
  };

  const thirdSideHandler = () => {
    if (typeof hypotenuse !== 'undefined' && sideTwo !== 'undefined') {
      setSideMustBe(Math.sqrt(hypotenuse * hypotenuse - sideTwo * sideTwo));
    } else if (typeof sideOne !== 'undefined' && sideTwo !== 'undefined') {
      setSideMustBe(Math.sqrt(sideOne * sideOne + sideTwo * sideTwo));
    }
    else if(typeof hypotenuse !== 'undefined' && sideOne !== 'undefined') {
      setSideMustBe(Math.sqrt(hypotenuse * hypotenuse - sideOne * sideOne));
    }
  };

  return (
    <div
      className={css`
        display: flex;
      `}
    >
      <div>
        <h3>اندازه اضلاع را وارد کنید</h3>

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

          <TextField onChange={sideOneHandler} type="number"></TextField>
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

          <TextField onChange={sideTwoHandler} type="number"></TextField>
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
          <TextField type="number" onChange={hypotenuseHandler}></TextField>
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
        <h1>{sideMustBe}</h1>
      </div>
    </div>
  );
}
