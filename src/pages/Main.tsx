import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from '../routes';
import Navbar from '../components/Navbar';

function Main(): JSX.Element {

  return (
    <>
    <Navbar />
      <h1>main</h1>
    </>
  );
}

export default Main;