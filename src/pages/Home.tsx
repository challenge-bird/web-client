import { Container } from 'react-bootstrap';
import MainBar from '../components/MainBar';
import Calendar from '../components/Calendar';

function Home(): JSX.Element {
  return (
    <>
      <MainBar />
      <Container>
        <Calendar />
      </Container>
    </>
  );
}

export default Home;