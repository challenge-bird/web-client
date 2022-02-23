import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import MainBar from '../components/MainBar';

import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';


function Home(): JSX.Element {
  moment.locale('ko-KR');
  const localizer = momentLocalizer(moment);

  return (
    <>
      <MainBar />
      <Container>
        <Calendar
          localizer={localizer}
          style={{ height: 500 }}
        />
      </Container>
    </>
  );
}

export default Home;