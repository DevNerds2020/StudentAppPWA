import { useState } from 'react';
import './cal.css';

function Calculator() {
  const [minput, setMinput] = useState(0);
  const [tempinput, setTempinput] = useState(0);
  const [operator, setOperator] = useState(0);

  //---------------number Adder--------------

  function keyHandler(event) {
    if (event.keyCode === 8) {
      setMinput(minput.slice(0, -1) + '');
    } else if (event.keyCode === 48) {
      if (minput === 0) {
        setMinput('');
        setMinput(minput + 0);
      } else {
        setMinput(minput + '0');
      }
    } else if (event.keyCode === 49) {
      if (minput === 0) {
        setMinput(minput + 1);
      } else {
        setMinput(minput + '1');
      }
    } else if (event.keyCode === 50) {
      if (minput === 0) {
        setMinput(minput + 2);
      } else {
        setMinput(minput + '2');
      }
    } else if (event.keyCode === 51) {
      if (minput === 0) {
        setMinput(minput + 3);
      } else {
        setMinput(minput + '3');
      }
    } else if (event.keyCode === 52) {
      if (minput === 0) {
        setMinput(minput + 4);
      } else {
        setMinput(minput + '4');
      }
    } else if (event.keyCode === 53) {
      if (minput === 0) {
        setMinput(minput + 5);
      } else {
        setMinput(minput + '5');
      }
    } else if (event.keyCode === 54) {
      if (minput === 0) {
        setMinput(minput + 6);
      } else {
        setMinput(minput + '6');
      }
    } else if (event.keyCode === 55) {
      if (minput === 0) {
        setMinput(minput + 7);
      } else {
        setMinput(minput + '7');
      }
    } else if (event.keyCode === 56) {
      if (minput === 0) {
        setMinput(minput + 8);
      } else {
        setMinput(minput + '8');
      }
    } else if (event.keyCode === 57) {
      if (minput === 0) {
        setMinput(minput + 9);
      } else {
        setMinput(minput + '9');
      }
    }
  }

  function oneHandler() {
    if (minput === 0) {
      setMinput(minput + 1);
    } else {
      setMinput(minput + '1');
    }
  }

  function twoHandler() {
    if (minput === 0) {
      setMinput('');
      setMinput(minput + 2);
    } else {
      setMinput(minput + '2');
    }
  }

  function threeHandler() {
    if (minput === 0) {
      setMinput('');
      setMinput(minput + 3);
    } else {
      setMinput(minput + '3');
    }
  }

  function fourHandler() {
    if (minput === 0) {
      setMinput('');
      setMinput(minput + 4);
    } else {
      setMinput(minput + '4');
    }
  }

  function fiveHandler() {
    if (minput === 0) {
      setMinput('');
      setMinput(minput + 5);
    } else {
      setMinput(minput + '5');
    }
  }

  function sixHandler() {
    if (minput === 0) {
      setMinput('');
      setMinput(minput + 6);
    } else {
      setMinput(minput + '6');
    }
  }

  function sevenHandler() {
    if (minput === 0) {
      setMinput('');
      setMinput(minput + 7);
    } else {
      setMinput(minput + '7');
    }
  }

  function eightHandler() {
    if (minput === 0) {
      setMinput('');
      setMinput(minput + 8);
    } else {
      setMinput(minput + '8');
    }
  }

  function nineHandler() {
    if (minput === 0) {
      setMinput('');
      setMinput(minput + 9);
    } else {
      setMinput(minput + '9');
    }
  }

  function zeroHandler() {
    if (minput === 0) {
      setMinput('');
      setMinput(minput + 0);
    } else {
      setMinput(minput + '0');
    }
  }

  function pointHandler() {
    if (String(minput).includes(`.`)) {
    } else {
      setMinput(minput + '.');
    }
  }

  //-----------------operators---------------

  function plusHandler() {
    setTempinput(tempinput + Number(minput));
    setOperator('+');
    setMinput(0);
  }

  function minusHandler() {
    setTempinput(tempinput - -Number(minput));
    setOperator('-');
    setMinput(0);
  }

  function multiplyHandler() {
    setTempinput(1 * Number(minput));
    setOperator('x');
    setMinput(0);
  }

  function devideHandler() {
    setTempinput(Number(minput));
    setOperator('÷');
    setMinput(0);
  }

  function signHandler() {
    setMinput(-minput);
  }
  function acHandler() {
    setMinput(0);
    setTempinput(0);
  }

  //------------results---------
  function eqHandler() {
    if (operator === '+') {
      setMinput(tempinput + Number(minput));
      console.log(tempinput);
      console.log(minput);
      setTempinput(0);
    } else if (operator === '-') {
      setMinput(tempinput - Number(minput));
      setTempinput(0);
    } else if (operator === 'x') {
      setMinput(tempinput * Number(minput));
      console.log(tempinput);
      console.log(minput);
      setTempinput(0);
    } else if (operator === '÷') {
      setMinput(tempinput / Number(minput));
    }
  }
  function percentHandler() {
    setMinput(minput / 100);
  }

  return (
    <div onKeyDown={keyHandler} className="container">
      <div className="cal">
        <h2 maxlength="16" className="minput">
          {minput}
        </h2>
        <div>
          <button onClick={acHandler} className="sops">
            AC
          </button>
          <button onClick={percentHandler} className="sops">
            %
          </button>
          <button onClick={signHandler} className="sops">
            +/-
          </button>
          <button onClick={devideHandler} className="oprators">
            ÷
          </button>
        </div>
        <div>
          <button onClick={oneHandler} className="values">
            1
          </button>
          <button onClick={twoHandler} className="values">
            2
          </button>
          <button onClick={threeHandler} className="values">
            3
          </button>
          <button onClick={multiplyHandler} className="oprators">
            x
          </button>
        </div>
        <div>
          <button onClick={fourHandler} className="values">
            4
          </button>
          <button onClick={fiveHandler} className="values">
            5
          </button>
          <button onClick={sixHandler} className="values">
            6
          </button>
          <button onClick={minusHandler} className="oprators">
            -
          </button>
        </div>
        <div>
          <button onClick={sevenHandler} className="values">
            7
          </button>
          <button onClick={eightHandler} className="values">
            8
          </button>
          <button onClick={nineHandler} className="values">
            9
          </button>
          <button onClick={plusHandler} className="oprators">
            +
          </button>
        </div>
        <div>
          <button onClick={zeroHandler} className="zerobtn">
            0
          </button>
          <button onClick={pointHandler} className="values">
            .
          </button>
          <button onClick={eqHandler} className="oprators">
            =
          </button>
        </div>
      </div>
    </div>
  );
}
export default Calculator;
