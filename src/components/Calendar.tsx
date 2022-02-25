import react from 'react';

import styles from './css/Calendar.module.css';

function Calendar(): JSX.Element {

  const drawCalendarBody = (): JSX.Element[]=> {

    // 0 일, 1 월, 2 화, 3 수, 4 목, 5 금, 6 토

    let result: Array<Array<any>> = [];

    let date: Date = new Date();

    let thisYear: number = date.getFullYear();
    let thisMonth: number = date.getMonth();

    let lastDayOfThisMonth: number = new Date(thisYear, thisMonth + 1, 0).getDate();

    let firstDayOfThisMonthDayOfWeek: number = new Date(thisYear, thisMonth + 1, 1).getDay();

    let curDay: number = 1;

    for (let i = 0; i < 6; i++) {
      let weekArray: Array<number> = [];

      for (let j = 0; j < 7; j++) {
        if (i === 0) {
          let day = new Date(thisYear, thisMonth, 1 - firstDayOfThisMonthDayOfWeek + j).getDate();
          curDay = day;

          weekArray.push(day);
        } else {
          curDay++;
          if (curDay <= lastDayOfThisMonth) {
            weekArray.push(curDay);
          } else {
            curDay = 1;
            weekArray.push(curDay);
          }
        }
      }

      result.push(weekArray);

      if (i > 3 && result[i][1] < lastDayOfThisMonth) {
        result.pop();
      }
    }

    return result.map(week => {
      return (
        <tr>
          {week.map(day => {
            return (
              <td>{day}</td>
            )
          })}
        </tr>
      );
    });
  }

  // const renderMovies: JSX.Element[] | string = movies.length ? movies.map(movie => {
  //   return (
  //     <MovieCard key={movie['id']} {...movie} removeMovie={removeMovie} />
  //   );
  // }) : '추가된 영화가 없습니다.';
  // const drawCalendarBody = ()

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