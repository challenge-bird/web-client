import react from 'react';

import styles from './css/Calendar.module.css';

function Calendar(): JSX.Element {
  return (
    <>
      <div>
        <table className={styles['calendar']}>
          <thead>
            <th>일</th>
            <th>월</th>
            <th>화</th>
            <th>수</th>
            <th>목</th>
            <th>금</th>
            <th>토</th>
          </thead>
        </table>
        <tbody>

        </tbody>
      </div>
    </>
  );
}

export default Calendar;