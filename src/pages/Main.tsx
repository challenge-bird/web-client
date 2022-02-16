import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Mainbar from '../components/MainBar';

import styles from './css/Main.module.css';

function Main(): JSX.Element {

  let ballonText = 'Hi';

  return (
    <>
      <Mainbar />
      <Container>
        <div className={styles['speech-balloon']}>
          <div className={styles['speech-content']}>{ballonText}</div>
        </div>
      </Container>
    </>
  );
}

export default Main;