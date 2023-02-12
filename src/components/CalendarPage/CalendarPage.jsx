import React from 'react';
import JCalendar from 'reactjs-persian-calendar';
import { useSelector } from 'react-redux';
import { css } from '@emotion/css';

function CalendarPage() {
  const { localeLanguage } = useSelector((state) => state.data);

  return (
    <div
      className={css`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
      `}
    >
      <JCalendar
        locale={localeLanguage === 'en' ? 'en' : 'fa'}
        color="#000066"
        size={54}
        onClick={console.log}
        itemRender={(key, item, children) => children}
      />
    </div>
  );
}

export default CalendarPage;
