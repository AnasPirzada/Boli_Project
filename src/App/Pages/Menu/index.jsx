import { Col, Container, Row } from 'react-bootstrap';
import Navbar from '../../Components/Navbar.jsx';
import SideBar from '../../Components/Sidebar.jsx';
import TabBar from './MenuTabbar.jsx';

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
            <SideBar activetabe='Menu' />
          </Col>
          <Col md={10} xs={10}>
            <Row>
              <Navbar />
            </Row>
            <Row
              className='mt-4 custom-scrollbar'
              style={{ height: '100vh', overflowY: 'auto' }}
            >
              <div>
                <TabBar />
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default index;
