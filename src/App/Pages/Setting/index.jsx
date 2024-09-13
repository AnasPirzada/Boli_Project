import { Col, Container, Row } from 'react-bootstrap';
import NavBar from '../../Components/Navbar.jsx';
import SideBar from '../../Components/Sidebar.jsx';
import MainPage from './mainPage.jsx';

const index = () => {
  return (
    <>
      <Container fluid className='  h-100'>
        <Row>
          <Col
            xs={2}
            md={2}
            className='text-center p-0 shadow '
            style={{ backgroundColor: '#FFFFFF', height: '100vh' }}
          >
            <SideBar activetabe='Settings' />
          </Col>
          <Col md={10} xs={10}>
            <Row>
              <NavBar />
            </Row>

            <Row
              className='custom-scrollbar'
              style={{
                height: '100vh',
                overflowY: 'auto',
                overflowX: 'hidden',
              }}
            >
              <MainPage />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default index;
