import { TextField, Button } from '@mui/material';
import { css } from '@emotion/css';
import { useState } from 'react';
import translation from '../../../utils/translation';
import { useSelector } from 'react-redux';


export default function Fibonacci() {

    const { localeLanguage } = useSelector((state) => state.data);

    const[givenNumber,setGivenNumber]=useState()
    const[results,setResults]=useState()
    console.log(givenNumber)

    const calculate=()=>{
        if (givenNumber < 2){
            setResults(1);
        } else {
            const a=givenNumber-2
            const b=givenNumber-1
            setResults (a+b);
        }
      }



  return (
    <>
      <div>
        <h3 className={css`margin: 30px;`}>{translation[localeLanguage].whichFibonnaciNumber}</h3>
        <div
          className={css`
            display: flex;
            justify-content:space-around;
          `}
        >
          <TextField onChange={(e)=>{setGivenNumber(e.target.value)}} type='number'  color='primary' variant="outlined"></TextField>

          <Button onClick={calculate}  variant="contained">{translation[localeLanguage].calculate}</Button>
        </div>
        <h1>{results}</h1>
      </div>
    </>
  );
}



