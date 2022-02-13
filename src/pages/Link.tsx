import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainBar from '../components/MainBar';

function Link(): JSX.Element {

  return (
    <>
      <MainBar />
      <h1>Link</h1>
    </>
  );
}

export default Link;