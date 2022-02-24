import react from 'react';

import styles from './css/Calendar.module.css';

function Calendar(): JSX.Element {

  let thisMonth = new Date().getMonth() + 1;

  const drawCalendarBody = (): JSX.Element => {

    // 0 일, 1 월, 2 화, 3 수, 4 목, 5 금, 6 토

    let result: Array<any> = [];

    let date: Date = new Date();

    let thisYear: number = date.getFullYear();
    let thisMonth: number = date.getMonth();

    let today: number = date.getDate();

    let lastDayOfThisMonth: number = new Date(thisYear, thisMonth + 1, 0).getDate();
    let lastDayOfThisMonthDayOfWeek: number = new Date(thisYear, thisMonth + 1, 0).getDay();

    let firstDayOfThisMonthDayOfWeek: number = new Date(thisYear, thisMonth + 1, 1).getDay();

    let lastDayOfLastMonth: number = new Date(thisYear, thisMonth, 0).getDate();
    let lastDayOfLastMonthDayOfWeek: number = new Date(thisYear, thisMonth, 0).getDay();

    let curDay: number = 0;

    for (let i = 0; i < 6; i++) {
      let weekArray: Array<number> = [];

      for (let j = 0; j < 7; j++) {
        if (i === 0) {
          weekArray.push(new Date(thisYear, thisMonth, 1 - firstDayOfThisMonthDayOfWeek + j).getDate());
        } else {

        }
        curDay++;
      }
      result.push(weekArray);
    }

    console.log(result)

    return (
      <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>7</td>
      </tr>
    )
    
  }

  return (
    <>
      <div>
        <table className={styles['calendar']}>
          <thead>
            <tr>
              <th>일</th>
              <th>월</th>
              <th>화</th>
              <th>수</th>
              <th>목</th>
              <th>금</th>
              <th>토</th>
            </tr>
          </thead>
          <tbody>
            {drawCalendarBody()}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Calendar; 