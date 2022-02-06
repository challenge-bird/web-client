import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from '../components/Navbar';

function Home(): JSX.Element {

  return (
    <>
      <NavBar />
      <h1>Home</h1>
    </>
  );
}

export default Home;