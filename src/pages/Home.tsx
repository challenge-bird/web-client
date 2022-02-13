import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainBar from '../components/MainBar';

function Home(): JSX.Element {

  return (
    <>
      <MainBar />
      <h1>Home</h1>
    </>
  );
}

export default Home;