import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from '../components/Navbar';

function Link(): JSX.Element {

  return (
    <>
      <NavBar />
      <h1>Link</h1>
    </>
  );
}

export default Link;