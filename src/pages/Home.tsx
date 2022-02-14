import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import MainBar from '../components/MainBar';

function Home(): JSX.Element {

  return (
    <>
      <MainBar />
      <Container>
        <h1>Home</h1>
      </Container>
    </>
  );
}

export default Home;