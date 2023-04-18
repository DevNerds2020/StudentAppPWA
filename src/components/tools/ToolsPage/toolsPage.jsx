import React from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import { css } from '@emotion/css';
import translation from '../../../utils/translation';

import Calculator from '../calculator/calculator';
import Fibonacci from '../fibonacci/fibonacci';
import PythagorasTriqangle from '../Pythagoras/Pythagoras';
import ToolButton from './ToolButton';
import Angle from '../angle/Angle';
import NumberDecomposer from '../NumberDecomposer/NumberDecomposer';
import KhayyamTriangleRow from '../KhayyamTriangleRow/KhayyamTriangleRow';
import PolygonDiameters from '../PolygonDiameters/PolygonDiameters';
import PrimeNumber from '../CheckPrime/CheckPrime';
import PiNumber from '../PiNumber/PiNumber';

export default function ToolsPage() {
  const { localeLanguage } = useSelector((state) => state.data);

  return (
    <div
      className={css`
        display: flex;
        justify-content: space-around;
        margin-top: 100px;
        margin-bottom: 100px;
        width: 100%;
        //media query 600px
        @media (max-width: 600px) {
          transform: scale(0.5);
        }
      `}
    >
      <Box
        className={css`
          display: flex;
          background-color: #04333b;
          width: 50rem;
          justify-content: space-around;
        `}
      >
        <div>
          <ToolButton name={translation[localeLanguage].calculator}>
            <Calculator />
          </ToolButton>
          <ToolButton
            name={translation[localeLanguage].primeNumbersWithCounter}
          >
            <PrimeNumber />
          </ToolButton>
          <ToolButton name={translation[localeLanguage].fibonacci}>
            <Fibonacci />
          </ToolButton>
        </div>
        <div>
          <ToolButton name={translation[localeLanguage].angle}>
            <Angle />
          </ToolButton>
          <ToolButton name={translation[localeLanguage].khayyamTriangle}>
            <KhayyamTriangleRow />
          </ToolButton>
          <ToolButton name={translation[localeLanguage].numberOfDiameters}>
            <PolygonDiameters />
          </ToolButton>
        </div>
        <div>
          <ToolButton name={translation[localeLanguage].pythagoras}>
            <PythagorasTriqangle />
          </ToolButton>
          <ToolButton name={translation[localeLanguage].decomposition}>
            <NumberDecomposer />
          </ToolButton>
          <ToolButton name={translation[localeLanguage].piNumber}>
            <PiNumber />
          </ToolButton>
        </div>
      </Box>
    </div>
  );
}
