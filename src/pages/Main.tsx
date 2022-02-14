import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Mainbar from '../components/MainBar';

function Main(): JSX.Element {

  return (
    <>
      <Mainbar />
      <Container>
        <h1>main</h1>
      </Container>
    </>
  );
}

export default Main;