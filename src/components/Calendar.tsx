import react from 'react';

import styles from './css/Calendar.module.css';

function Calendar(): JSX.Element {
  // const [month, setMonth] = useState<JSX.Element>();
  const drawCalendarBody = (): JSX.Element[] => {
    let result: Array<Array<Date>> = [];
    // 0 일, 1 월, 2 화, 3 수, 4 목, 5 금, 6 토

    let date: Date = new Date();

    let thisYear: number = date.getFullYear();
    let thisMonth: number = date.getMonth();

    let firstDay: Date = new Date(thisYear, thisMonth, 1);
    let lastDay: Date = new Date(thisYear, thisMonth + 1, 0);

    let curDate: Date = new Date();

    let isBreak = false;
    for (let i = 0; i < 6; i++) {
      let weekArray: Array<Date> = [];

      if (i === 0) {
        curDate = firstDay;
      } else {
        curDate.setDate(curDate.getDate() + 7);
      }

      for (let j = 0; j < 7; j++) {
        let tmpDate = new Date(
          curDate.setDate(curDate.getDate() - curDate.getDay() + j)
        );
        if (j === 0 && tmpDate > lastDay) {
          isBreak = true;
          break;
        }
        weekArray.push(
          new Date(curDate.setDate(curDate.getDate() - curDate.getDay() + j))
        );
      }

      if (!isBreak) result.push(weekArray);
    }

    return result.map((week, weekIdx) => {
      return (
        <tr key={weekIdx}>
          {week.map((day) => {
            return (
              <td
                key={day.getTime()}
                className={
                  day.getMonth() !== date.getMonth()
                    ? styles['not-this-month']
                    : ''
                }
              >
                {day.getDate()}
              </td>
            );
          })}
        </tr>
      );
    });
  };

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
          <tbody>{drawCalendarBody()}</tbody>
        </table>
      </div>
    </>
  );
}

export default Calendar;
