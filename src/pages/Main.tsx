import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mainbar from '../components/MainBar';

function Main(): JSX.Element {

  return (
    <>
      <Mainbar />
      <h1>main</h1>
    </>
  );
}

export default Main;