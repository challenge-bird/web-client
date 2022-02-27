import { Container } from 'react-bootstrap';
import Mainbar from '../components/MainBar';

import styles from './css/Main.module.css';

function Main(): JSX.Element {

  let ballonText = 'Hi';

  return (
    <>
      <Mainbar />
      <Container>
        <div className={styles['chracter-balloon']}></div>
        <img className={styles['character']} src="img/bird.png" alt="bird"></img>
        <div className={styles['speech-balloon']}>
          <div className={styles['speech-content']}>{ballonText}</div>
        </div>
      </Container>
    </>
  );
}

export default Main;